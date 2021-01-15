import ItemInstance from '../../models/iteminstance';
import Item from '../../models/item';
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
    console.log('errors: ', errors);
    res.status(500).json({ error: errors, status: 500 });
    res.end();
    return;
  }

  ItemInstance.find({ user: validateduser, status: 'Checkout' })
    .populate('item')
    .then((items_order) => {
      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      }
      var groupeditems_order = Object.entries(
        groupBy(items_order, 'ordernumber')
      );

      res.status(201).json({ status: 201, data: groupeditems_order });
      res.end();
    })
    .catch((err) => {
      console.log('err: ', err);
      res.status(500).json({ status: 500, error: err });
      res.end();
    });
}
