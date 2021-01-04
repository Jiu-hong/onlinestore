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
        file;
    var errors = [];
    await dbConnect();

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.json(err);
            return;
        }

        title = fields.title;
        owner = fields.owner;
        quantity = fields.quantity;
        price = fields.price;
        introduction = fields.introduction;
        file = files.itemattach;
        console.log('title: ', title);
        console.log('owner: ', owner);
        console.log('quantity: ', quantity);
        console.log('price: ', price);
        console.log('introduction: ', introduction);
        // validator text

        if (!validator.isLength(validator.trim(title), { min: 2, max: 25 })) {
            errors.push(' The title length should be 1 - 25 length');
        } else {
            console.log('I am in validate title');
            validatedtitle = validator.escape(validator.trim(title));
        }

        if (validator.isEmpty(validator.trim(owner))) {
            errors.push(' The owner is empty');
        } else {
            console.log('I am in validate owner');
            validatedowner = validator.escape(validator.trim(owner));
        }

        if (validator.isEmpty(validator.trim(quantity))) {
            errors.push(' The quantity is empty');
        } else {
            if (validator.isInt(validator.trim(quantity))) {
                console.log('I am in validate quantity');
                validatedquantity = validator.escape(validator.trim(quantity));
            } else {
                errors.push(' The quantity is NOT integer');
            }
        }

        if (validator.isEmpty(validator.trim(price))) {
            errors.push(' The price is empty');
        } else {
            if (validator.isFloat(validator.trim(price))) {
                console.log('I am in validate price');
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
                    max: 300,
                })
            ) {
                console.log('I am in validate introduction');
                validatedintroduction = validator.escape(
                    validator.trim(introduction)
                );
            } else {
                console.log(
                    'validator.trim(introduction): ',
                    validator.trim(introduction).length
                );
                errors.push(
                    ' The introduction length should be 20 - 300 length'
                );
            }
        }

        if (errors.length > 0) {
            console.log('errors in owner_updateitem_post.js: ', errors);
            res.status(500).json({ error: errors, status: 500 });
            res.end();
            return;
        }

        console.log('I am before handle files');
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

        var item = new Item({
            title: validatedtitle,
            owner: validatedowner,
            quantity: validatedquantity,
            price: validatedprice,
            image: filearray,
            introduction: validatedintroduction,
        });

        item.save()
            .then((item) => {
                console.log('item: ', item);
                res.status(201).json({ data: item });
                res.end();
            })
            .catch((err) => {
                console.log('err: ', err);
                res.status(500).json({ error: err });
                res.end();
            });
    });
}
