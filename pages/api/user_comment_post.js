import ItemInstance from '../../models/iteminstance';
import dbConnect from '../../utils/dbConnect';

import validator from 'validator';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);

  var validatedcomment, validatedinsid;
  var errors = [];
  await dbConnect();

  // validator text

  if (
    !validator.isLength(validator.trim(req.body.comment), {
      min: 15,
      max: 500,
    })
  ) {
    errors.push(' The input length should be 15 - 500 length');
  } else {
    validatedcomment = validator.escape(validator.trim(req.body.comment));
  }

  if (validator.isEmpty(validator.trim(req.body.insid))) {
    errors.push(' The insid is empty');
  } else {
    validatedinsid = validator.escape(validator.trim(req.body.insid));
  }

  if (errors.length > 0) {
    res.status(500).json({ error: errors, status: 500 });
    res.end();
    return;
  }

  ItemInstance.findByIdAndUpdate(validatedinsid, {
    commenttext: validatedcomment,
    commentimage: req.body.urls,
    upload: true,
  })
    .populate('item')
    .then((items_comment) => {
      res.status(201).json({ status: 201, data: items_comment });
      res.end();
    })
    .catch((err) => {
      console.log('err: ', err);
      res.status(500).json({ status: 500, error: err });
      res.end();
    });
}
