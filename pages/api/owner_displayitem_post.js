import Item from '../../models/item';
import dbConnect from '../../utils/dbConnect';

import formidable from 'formidable';
import fs from 'fs';

import validator from 'validator';

export const config = {
    api: {
        externalResolver: true,
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    var insid = req.body.insid;
    var errors = [];

    if (validator.isEmpty(validator.trim(insid))) {
        errors.push(' The insid is empty');
    } else {
        validatedinsid = validator.escape(validator.trim(insid));
    }

    if (errors.length > 0) {
        res.status(500).json({ error: errors, status: 500 });
        res.end();
        return;
    }

    await dbConnect();
        Item.findById(validatedinsid)
            .then((item) => {
                res.status(201).json({ status: 201, data: item});
                res.end();
            })
            .catch((err) => {
                res.status(500).json({ status: 500, error: err });
                res.end();
            });
    });
}
