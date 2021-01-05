import ItemInstance from '../../models/iteminstance';
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
                });

                return iteminstance
                    .save()
                    .then((result) => console.log('result: ', result));
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
            console.log('err in addtocart_post.js: ', err);
            res.status(500).json({ error: err });
            res.end();
        });
    /*

    () => {
            return ItemInstance.find({
                user: req.body.user,
                status: 'Cart',
            }).populate('item');



  await ItemInstance.findOneAndUpdate(
    { user: req.body.user, status: 'Cart', item: req.body.itemid },
    { $inc: { quantity: req.body.count }, buy_date: Date.now(), check: true }
  ).exec(function (err, items_cart) {
    if (err) {
      res.send('err');
      console.log('err: ', err);
      res.end();
      return new Error(err);
    } else if (items_cart == null) {
      var iteminstance = new ItemInstance({
        item: req.body.itemid,
        user: req.body.user,
        quantity: req.body.count,
      });
      iteminstance.save(function (err) {
        if (err) {
          return new Error(err);
        }
        console.log('add new instance to itemInstance');
      });
    } else {
      // Successful - redirect to new record.
      console.log('update exist itemInstance');
    }
  });

  ItemInstance.find({ user: req.body.user, status: 'Cart' })
    .populate('item')
    .exec(function (err, items_carts) {
      if (err) {
        res.send('err');
        console.log('err: ', err);
        res.end();
        return new Error(err);
      } else {
        // Successful.
        console.log('find exist itemInstance');

        res.status(201).json({ data: items_carts });
        res.end();
      }
    });*/
}
