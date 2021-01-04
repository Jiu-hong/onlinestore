import ItemInstance from '../../models/iteminstance';
import dbConnect from '../../utils/dbConnect';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);
  console.log('req.body: ', req.body);
  await dbConnect();
  ItemInstance.find({ user: req.body.user, status: 'Cart', check: true })
    .populate('item')
    .exec(function (err, checked_carts) {
      if (err) {
        res.send('err');
        console.log('err: ', err);
        res.end();
        return new Error(err);
      } else {
        // Successful.
        console.log('checked_carts): ', checked_carts);

        res.status(201).json({ data: checked_carts });
        res.end();
      }
    });
}
