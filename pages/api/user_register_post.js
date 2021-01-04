import User1 from '../../models/user';
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

    var validatedusername, validatedemail, validatedpassword;
    var errors = [];
    await dbConnect();

    var formfields = await new Promise((resolve, reject) =>
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log('err: ', err);
                res.json(err);
                return;
            }
            /*  username = fields.username;
            email = feilds.email;
            password = fields.password;*/
            resolve(fields);
        })
    );

    // validator text
    if (validator.isEmpty(validator.trim(formfields.username))) {
        errors.push(' The username is empty');
    } else {
        validatedusername = validator.escape(
            validator.trim(formfields.username)
        );
    }

    if (validator.isEmpty(validator.trim(formfields.email))) {
        errors.push(' The email is empty');
    } else {
        if (validator.isEmail(validator.trim(formfields.email))) {
            validatedemail = validator.escape(validator.trim(formfields.email));
        } else {
            errors.push('The email format is incorrect');
        }
    }

    if (validator.isEmpty(validator.trim(formfields.password))) {
        errors.push(' The password is empty');
    } else {
        if (
            validator.isLength(validator.trim(formfields.password), {
                min: 6,
            })
        ) {
            validatedpassword = validator.escape(
                validator.trim(formfields.password)
            );
        } else {
            errors.push(' The password must be at least 6 charactors.');
        }
    }

    if (
        validator.trim(formfields.confirmPassword) !==
        validator.trim(formfields.password)
    ) {
        errors.push('Password confirmation does not match password.');
    }

    await User1.findOne({ email: validator.trim(formfields.email) }).then(
        (user) => {
            if (user) errors.push('Email already in use');
        }
    );

    if (errors.length > 0) {
        console.log(' errors:', errors);
        res.status(500).json({ error: errors, status: 500 });
        res.end();
        return;
    }

    const hashedPassword = getHashedPassword(validatedpassword);
    var user = new User1({
        username: validatedusername,
        email: validatedemail,
        password: hashedPassword,
    });

    user.save(function (err, user) {
        if (err) {
            res.status(500).json({ status: 500, error: err });
            res.end();
        } else {
            console.log('user: ', user);
            // Successful - redirect to login.
            res.status(201).json({ status: 201, data: user });
            res.end();
        }
    });
}
