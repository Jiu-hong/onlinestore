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

    ItemInstance.findByIdAndRemove(req.body.instanceid)
        .then((result) => {
            res.status(201).json({ data: 'success' });
            res.end();
        })
        .catch((err) => {
            res.status(500).json({ error: err });
            res.end();
        });
}
