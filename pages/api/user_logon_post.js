import User from '../../models/user';
import dbConnect from '../../utils/dbConnect';
import crypto from 'crypto';

import formidable from 'formidable';

import validator from 'validator';

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
};

export default async function handler(req, res) {
  const form = formidable({ multiples: true });

  var validatedemail, validatedpassword;
  var errors = [];
  await dbConnect();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log('err: ', err);
      res.json(err);
      return;
    }

    // validator text

    if (validator.isEmpty(validator.trim(fields.email))) {
      errors.push(' The email is empty');
    } else {
      if (validator.isEmail(validator.trim(fields.email))) {
        validatedemail = validator.escape(validator.trim(fields.email));
      } else {
        errors.push(' The email format is incorrect');
      }
    }

    if (validator.isEmpty(validator.trim(fields.password))) {
      errors.push(' The password is empty');
    } else {
      if (validator.isLength(validator.trim(fields.password), { min: 6 })) {
        validatedpassword = validator.escape(validator.trim(fields.password));
      } else {
        errors.push('The password must be at least 6 charactors.');
      }
    }

    if (errors.length > 0) {
      res.status(500).json({ error: errors, status: 500 });
      res.end();
      return;
    }

    const hashedPassword = getHashedPassword(validatedpassword);
    User.findOne({ email: validatedemail, password: hashedPassword })
      .then((user) => {
        if (!user) {
          errors.push('Invalid username or password');
          res.status(404).json({ status: 404, error: errors });
          res.end();
        } else {
          res.status(201).json({ status: 201, data: user });
          res.end();
        }
      })
      .catch((err) => {
        res.status(500).json({ status: 500, error: err });
        res.end();
      });
  });
}
