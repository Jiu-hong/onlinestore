import ItemInstance from '../../models/iteminstance';
import dbConnect from '../../utils/dbConnect';
import validator from 'validator';
export const config = {
    api: {
        externalResolver: true,
    },
};

export default async function handler(req, res) {
    req.body = JSON.parse(req.body);

    var ordernumber;
    var validateduser;

    if (validator.isEmpty(validator.trim(req.body.user))) {
        errors.push(' The user is empty');
    } else {
        validateduser = validator.escape(validator.trim(req.body.user));
    }

    await dbConnect();

    ordernumber = Math.floor(new Date().valueOf() + Math.random());

    // first write to order document?
    ItemInstance.updateMany(
        { status: 'Cart', check: true },
        { status: 'Checkout', ordernumber: ordernumber, buy_date: Date.now() }
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
