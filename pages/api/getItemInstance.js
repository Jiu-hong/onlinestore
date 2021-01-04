// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect';
import ItemInstance from '../../models/iteminstance';

export default async (req, res) => {
  await dbConnect();

  /* find all the data in our database */
  const result = await ItemInstance.find({});
  const itemInstance = JSON.parse(JSON.stringify(result));
  //console.log('items: ', items);
  res.send(itemInstance);
};
