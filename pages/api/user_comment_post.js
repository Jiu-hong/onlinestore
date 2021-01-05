import ItemInstance from '../../models/iteminstance';
import dbConnect from '../../utils/dbConnect';

import formidable from 'formidable';
import fs, { readdirSync } from 'fs';
import path from 'path';

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
    var text, validatedtext, insid, validatedinsid, file;
    var errors = [];
    await dbConnect();

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.json(err);
            return;
        }

        text = fields.textarea;
        insid = fields.insid;
        file = files.commentattach;

        // validator text

        if (!validator.isLength(validator.trim(text), { min: 15, max: 500 })) {
            errors.push(' The input length should be 15 - 500 length');
        } else {
            validatedtext = validator.escape(validator.trim(text));
        }

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

        // fields.textarea -> send to comment
        var oldPath, newPath;
        if (file.length) {
            // var filestodb = [];
            for (let i = 0; i < file.length; i++) {
                oldPath = file[i].path;
                newPath = '/comment/' + file[i].name;
                console.log('newPath: ', newPath);
                console.log(
                    'path.parse(process.cwd()).root in user_comment_post.js: ',
                    process.cwd()
                );
                console.log(
                    'path.parse(process.cwd()).root in user_comment_post.js: ',
                    path.parse(process.cwd()).root
                );
                fs.renameSync(oldPath, newPath);
                newPath = '/' + newPath.split('/').slice(1).join('/');

                filearray.push(newPath); //file to db;
            }
        } else {
            if (file.size !== 0) {
                oldPath = file.path;
                newPath = '/comment/' + file.name;

                console.log('newPath: ', newPath);
                console.log(
                    'process.cwd(). in user_comment_post.js: ',
                    process.cwd()
                );
                console.log(
                    'path.parse(process.cwd()).root in user_comment_post.js: ',
                    path.parse(process.cwd()).root
                );
                var dirs = readdirSync(process.cwd());
                console.log('dirs: ', dirs);

                fs.renameSync(oldPath, newPath);
                newPath = '/' + newPath.split('/').slice(1).join('/');

                filearray.push(newPath); //file to db
            } else {
                console.log('no file');
            }
        }

        ItemInstance.findByIdAndUpdate(validatedinsid, {
            commenttext: validatedtext,
            commentimage: filearray,
        })
            .populate('item')
            .then((items_comment) => {
                console.log('items_comment: ', items_comment);
                res.status(201).json({ status: 201, data: items_comment });
                res.end();
            })
            .catch((err) => {
                res.status(500).json({ status: 500, error: err });
                res.end();
            });
    });
}
