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

                res.status(201).json({ data: items_carts });
                res.end();
            }
        });
}
