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
  var validatedinsid;
  await dbConnect();

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
    check: req.body.check,
    buy_date: Date.now(),
  })
    .populate('item')
    .then((newins) => {
      res.status(201).json({ status: 201, data: newins });
      res.end();
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err });
      res.end();
    });
}
