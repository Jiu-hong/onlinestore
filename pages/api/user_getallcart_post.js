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

  var errors = [];
  var validateduser;
  await dbConnect();

  if (validator.isEmpty(validator.trim(req.body.user))) {
    errors.push(' The user is empty');
  } else {
    validateduser = validator.escape(validator.trim(req.body.user));
  }

  if (errors.length > 0) {
    res.status(500).json({ error: errors, status: 500 });
    res.end();
    return;
  }

  ItemInstance.find({ user: validateduser, status: 'Cart' })
    .populate('item')
    .then((items_cart) => {
      res.status(201).json({ status: 201, data: items_cart });
      res.end();
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err });
      res.end();
    });
}
