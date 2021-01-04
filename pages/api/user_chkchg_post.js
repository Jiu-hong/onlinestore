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

    //https://stackoverflow.com/questions/38439748/best-way-of-chaining-mongoose-queries
    ItemInstance.findByIdAndUpdate(req.body.instanceid, {
        check: req.body.check,
        buy_date: Date.now(),
    })
        .populate('item')
        .then((newins) => {
            res.status(201).json({ data: newins });
            res.end();
        })
        .catch((err) => {
            res.status(500).json({ error: err });
            res.end();
        });
}
