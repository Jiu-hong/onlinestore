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
        quantity: req.body.count,
        //  buy_date: Date.now(),
        //check: true,
    })
        .populate('item')
        .then((newins) => {
            console.log(
                'res after findByIdAndUpdate in changetocart: ',
                newins
            );
            res.status(201).json({ data: newins });
            res.end();
            /*   return ItemInstance.find({
                user: req.body.user,
                status: 'Cart',
            }).populate('item');*/
        })
        .catch((err) => {
            console.log('err after findByIdAndUpdate in changetocart: ', err);
            res.status(500).json({ error: err });
            res.end();
        });
}
