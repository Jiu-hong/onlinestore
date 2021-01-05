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
    console.log('req.body: ', req.body);
    var errors = [];
    var validatedcount, validatedinsid;
    await dbConnect();

    if (validator.isEmpty(validator.trim(req.body.insid))) {
        errors.push(' The insid is empty');
    } else {
        validatedinsid = validator.escape(validator.trim(req.body.insid));
    }

    if (validator.isEmpty(validator.trim(req.body.count))) {
        errors.push(' The count is empty');
    } else {
        //check if count is integer
        if (validator.isInt(validator.trim(req.body.count))) {
            validatedcount = validator.escape(validator.trim(req.body.count));
        } else {
            errors.push(' The count is not number');
        }
    }

    if (errors.length > 0) {
        res.status(500).json({ error: errors, status: 500 });
        res.end();
        return;
    }

    ItemInstance.findByIdAndUpdate(validatedinsid, {
        quantity: validatedcount,
        buy_date: Date.now(),
    })
        .populate('item')
        .then((newins) => {
            console.log('newins: ', newins);
            res.status(201).json({ status: 201, data: newins });
            res.end();
        })
        .catch((err) => {
            res.status(500).json({ status: 500, error: err });
            res.end();
        });
}
