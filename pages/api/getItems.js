// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/item';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const items = await Item.find({});
    console.log('items: ', Item.find({}));
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(400).json({ success: false });
  }

  /* find all the data in our database */
}
