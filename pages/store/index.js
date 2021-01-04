import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import Link from 'next/link';
import dbConnect from '../utils/dbConnect';
import Layout from '../../components/layout';
import Item from '../models/Item';

export default function Index({ items }) {
  return (
    <Layout>
      {/* Create a card for each item */}
      <div className='card-columns'>
        {items.map((item) => (
          <div key={item._id}>
            <div className='card card-body'>
              <img
                src={item.image}
                style={{
                  display: 'block',
                  margin: '0 auto 10px',
                  height: '200px',
                  width: '200px',
                }}
              />
              <p className='item-name'>{item.title}</p>

              <h3 className='text-left'>price: {item.price}</h3>

              <div className='text-right'>
                <Link href='/[id]/detail' as={`/${item._id}/detail`}>
                  <a className='btn btn-link btn-sm mr-2'>detail</a>
                </Link>

                <button
                  onClick={() => increase(product)}
                  className='btn btn-outline-primary btn-sm'
                >
                  Add more
                </button>
                {/*isInCart(product) && (
                  <button
                    onClick={() => increase(product)}
                    className='btn btn-outline-primary btn-sm'
                  >
                    Add more
                  </button>
                )*/}

                {/*!isInCart(product) && (
                  <button
                    onClick={() => addProduct(product)}
                    className='btn btn-primary btn-sm'
                  >
                    Add to cart
                  </button>
                )*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
/* Retrieves item(s) data from mongodb database */
export async function getStaticProps() {
  //export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Item.find({});
  const items = JSON.parse(JSON.stringify(result));

  return { props: { items: items } };
}
