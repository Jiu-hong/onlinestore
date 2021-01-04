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
    const form = formidable({ multiples: true });
    var filearray = [];
    var title,
        validatedtitle,
        owner,
        validatedowner,
        quantity,
        validatedquantity,
        price,
        validatedprice,
        introduction,
        validatedintroduction,
        insid,
        validatedinsid,
        file;
    var errors = [];
    await dbConnect();

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.json(err);
            return;
        }

        title = fields.title;
        insid = fields.insid;
        owner = fields.owner;
        quantity = fields.quantity;
        price = fields.price;
        introduction = fields.introduction;
        file = files.itemattach;

        // validator text

        if (!validator.isLength(validator.trim(title), { min: 2, max: 25 })) {
            errors.push(' The title length should be 1 - 25 length');
        } else {
            validatedtitle = validator.escape(validator.trim(title));
        }

        if (validator.isEmpty(validator.trim(insid))) {
            errors.push(' The insid is empty');
        } else {
            validatedinsid = validator.escape(validator.trim(insid));
        }

        if (validator.isEmpty(validator.trim(owner))) {
            errors.push(' The owner is empty');
        } else {
            validatedowner = validator.escape(validator.trim(owner));
        }

        if (validator.isEmpty(validator.trim(quantity))) {
            errors.push(' The quantity is empty');
        } else {
            if (validator.isInt(validator.trim(quantity))) {
                validatedquantity = validator.escape(validator.trim(quantity));
            } else {
                errors.push(' The quantity is NOT integer');
            }
        }

        if (validator.isEmpty(validator.trim(price))) {
            errors.push(' The price is empty');
        } else {
            if (validator.isFloat(validator.trim(price))) {
                validatedprice = validator.escape(validator.trim(price));
            } else {
                errors.push(' The price is NOT Float');
            }
        }

        if (validator.isEmpty(validator.trim(introduction))) {
            errors.push(' The introduction is empty');
        } else {
            if (
                validator.isLength(validator.trim(introduction), {
                    min: 20,
                    max: 100,
                })
            ) {
                validatedintroduction = validator.escape(
                    validator.trim(introduction)
                );
            } else {
                console.log(
                    'validator.trim(introduction): ',
                    validator.trim(introduction)
                );
                errors.push(
                    ' The introduction length should be 2 - 100 length'
                );
            }
        }

        if (errors.length > 0) {
            console.log('errors in owner_updateitem_post.js: ', errors);
            res.status(500).json({ error: errors, status: 500 });
            res.end();
            return;
        }

        // fields.textarea -> send to comment
        var oldPath, newPath;
        if (file.length) {
            // var filestodb = [];
            for (let i = 0; i < file.length; i++) {
                oldPath = file[i].path;
                newPath = 'public/item/' + file[i].name;

                fs.renameSync(oldPath, newPath);
                newPath = '/' + newPath.split('/').slice(1).join('/');
                console.log('newPath name: ', newPath);
                filearray.push(newPath); //file to db;
            }
        } else {
            if (file.size !== 0) {
                oldPath = file.path;
                newPath = 'public/item/' + file.name;
                fs.renameSync(oldPath, newPath);
                newPath = '/' + newPath.split('/').slice(1).join('/');
                console.log('newPath name: ', newPath);
                filearray.push(newPath); //file to db
            } else {
                console.log('no file');
            }
        }

        Item.findByIdAndUpdate(validatedinsid, {
            title: '',
            image: filearray,
            owner: '',
            quantity: '',
            price: '',
        })
            .populate('item')
            .then((item_updated) => {
                console.log(
                    'item_updated in owner_updateitem_post.js: ',
                    item_updated
                );
                res.status(201).json({ status: 201, data: item_updated });
                res.end();
            })
            .catch((err) => {
                console.log('err in owner_updateitem_post.js: ', err);
                res.status(500).json({ status: 500, error: err });
                res.end();
            });
    });
}
