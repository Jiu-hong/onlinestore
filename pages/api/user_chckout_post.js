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
    ItemInstance.updateMany(
        { status: 'Cart', check: true },
        { status: 'Checkout', buy_date: Date.now() }
    )
        .then(() => {
            return ItemInstance.find({
                user: req.body.user,
                status: 'Cart',
            }).populate('item');
        })
        .then((items_carts) => {
            res.status(201).json({ data: items_carts });
            res.end();
        })
        .catch((err) => {
            res.status(500).json({ error: err });
            res.end();
        });
}
