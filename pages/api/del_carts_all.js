import ItemInstance from '../../models/iteminstance';
import User1 from '../../models/user';
import Item from '../../models/item';
import dbConnect from '../../utils/dbConnect';
import mongoose from 'mongoose';

var Schema = mongoose.Schema;
export const config = {
    api: {
        externalResolver: true,
    },
};

export default async function handler(req, res) {
    //req.body = JSON.parse(req.body);
    console.log('req.body: ', req.body);
    await dbConnect();

    /* var iteminstance = new ItemInstance({
        item: '5fe00ed13f144c7e71c5e1e7',
        user: 'asdfghjk',
        status: 'Cart',
        quantity: 99,
    });*/
    // ItemInstance.paths;
    // console.log('path: ', ItemInstance.path(ordernumber));
    ItemInstance = ItemInstance.add({ ordernumber: String });
    console.log('path: ', ItemInstance.path(ordernumber));
    //  const TurboManSchema = new Schema();
    // You can also `add()` another schema and copy over all paths, virtuals,
    // getters, setters, indexes, methods, and statics.
    //  TurboManSchema.add(ToySchema).add({ year: Number });
    /*
    Item.findOneAndUpdate(
        { title: 'baby clothes' },
        {
            image: ['/item/waranya-mooldee-Efj0HGPdPKs-unsplash.jpg'],
        }
    )
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});
*/
    /*
        _id: 5fe00d8c2a5dd37d39833429, -> 'Potted plant' c
        title: 'balloon',

        _id: 5fe00def3f144c7e71c5e1e0, -> 'Cone IceCream' c
    title: 'ice cream',

    _id: 5fe00e0f3f144c7e71c5e1e1,
    title: 'Potted plant'

    _id: 5fe00e353f144c7e71c5e1e2, -> 'baby clothes'c
    title: 'Cone IceCream',

    _id: 5fe00e5f3f144c7e71c5e1e3, -> 'fox pet' c
    title: 'baby clothes',


    _id: 5fe00e7a3f144c7e71c5e1e4, -> 'snacks' c
    title: 'fox pet',

    _id: 5fe00e913f144c7e71c5e1e5, -> 'balloon' c
    title: 'snacks',

    _id: 5fe00eb93f144c7e71c5e1e6,
    title: 'Ice cream in a bowl',

    _id: 5fe00ed13f144c7e71c5e1e7, -> "lemon"
    title: 'rabbit',




/*
    Item.findByIdAndUpdate('5fe00def3f144c7e71c5e1e0', {
        image: ['/item/faria-anzum-ONK9IlKizS4-unsplash.jpg'],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});

    Item.findByIdAndUpdate('5fe00e0f3f144c7e71c5e1e1', {
        image: ['/item/ian-dooley-TLD6iCOlyb0-unsplash.jpg'],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});

    Item.findByIdAndUpdate('5fe00e353f144c7e71c5e1e2', {
        image: ['/item/jelleke-vanooteghem-wzOyUkuLy7E-unsplash.jpg'],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});

    Item.findByIdAndUpdate('5fe00e5f3f144c7e71c5e1e3', {
        image: ['/item/jonatan-pie-xgTMSz6kegE-unsplash.jpg'],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});

    Item.findByIdAndUpdate('5fe00e7a3f144c7e71c5e1e4', {
        image: ['/item/michelle-tsang-VTt_Jn1LrOg-unsplash.jpg'],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});

    Item.findByIdAndUpdate('5fe00eb93f144c7e71c5e1e6', {
        image: [
            '/item/sheri-silver-5A0O12BIsjY-unsplash.jpg',
            '/item/waranya-mooldee-Efj0HGPdPKs-unsplash.jpg',
            '/item/lemon.jpg',
            '/item/lemon2.jpg',
            '/item/lemon3.jpg',
        ],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});

    Item.findByIdAndUpdate('5fe00ed13f144c7e71c5e1e7', {
        image: ['/item/lemon.jpg', '/item/lemon2.jpg', '/item/lemon3.jpg'],
    })
        .then((item) => {
            console.log('result after update  item: ', item);
        })
        .catch((err) => {});*/

    /* User1.findOneAndUpdate(
        { email: 'jiu.hong.sun@gmail.co' },
        { username: 'redbird' }
    ).then((users) => console.log('users: ', users));*/
    /* User1.deleteMany({ email: 'jiu.hong.sun@gmail.com' })
        .then((res) => console.log('res: ', res))
        .catch((err) => console.log('err: ', err));*/
    // ItemInstance.find().then((result) => console.log('result: ', result));
}

//
/*  const a = new Promise((res, rej) => {
        iteminstance.save(function (error, new_item) {
            new_item.populate('item', function (err, newitemafterpopulate) {
                console.log('new_item: ', newitemafterpopulate);
                return res(newitemafterpopulate);
            });
        });
    });
    a.then((res) => console.log('I am in test: ', res)).catch((err) =>
        console.log(err)
    // iteminstance.save((error, new_item) => new_item.populate());
    /*.then((result) => {
            //items = JSON.parse(JSON.stringify(res));
            console.log('res: ', result);
            res.status(201).json({ data: result });
            res.end();
        })
        .catch((err) => {
            console.log('err: ', err);

            res.status(500).json({ error: err });
            res.end();
        });*/

//var cutoff = new Date();
//cutoff.setDate(cutoff.getDate() - 5);
/*  ItemInstance.findByIdAndUpdate('5fed3a5af2807ffa54f7e2f5', {
        commenttext: '444555',
        commentimage: [
            'uploadsnew/waranya-mooldee-Efj0HGPdPKs-unsplash.jpg',
            'dsnew/waranya-mooldee-Efj0HGPdPKs-',
        ],
    })
        .populate('item')
        .then((result) => {
            //items = JSON.parse(JSON.stringify(res));
            console.log('res: ', result);
            res.status(201).json({ data: result });
            res.end();
        })
        .catch((err) => {
            console.log('err: ', err);

            res.status(500).json({ error: err });
            res.end();
        });*/
/*
  ItemInstance.deleteMany({ status: 'Cart', item: '1' })
    .then(console.log('delete success'))
    .catch((err) => {
      res.status(500).json({ error: err });
      res.end();
    });*/
