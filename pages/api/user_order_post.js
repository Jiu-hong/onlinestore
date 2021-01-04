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
    ItemInstance.find({ user: req.body.user, status: 'Checkout' })
        .populate('item')
        .then((orders) => {
            res.status(201).json({ data: orders });
            res.end();
        })
        .catch((err) => {
            res.status(500).json({ error: err });
            res.end();
        });
}
