import ItemInstance from '../../models/iteminstance';
import Item from '../../models/item';
import dbConnect from '../../utils/dbConnect';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);

  await dbConnect();
  //https://stackoverflow.com/questions/38439748/best-way-of-chaining-mongoose-queries
  ItemInstance.findOneAndUpdate(
    { user: req.body.user, status: 'Cart', item: req.body.itemid },
    {
      $inc: { quantity: req.body.count },
      buy_date: Date.now(),
      check: true,
    }
  )
    .then((res) => {
      if (res == null) {
        var iteminstance = new ItemInstance({
          item: req.body.itemid,
          user: req.body.user,
          status: 'Cart',
          quantity: req.body.count,
          check: true,
        });

        return iteminstance.save();
      }
    })
    .then(() => {
      return ItemInstance.find({
        user: req.body.user,
        status: 'Cart',
      }).populate('item');
    })
    .then((item_carts) => {
      res.status(201).json({ data: item_carts });
      res.end();
    })
    .catch((err) => {
      res.status(500).json({ error: err });
      res.end();
    });
}
