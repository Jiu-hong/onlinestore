//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import dbConnect from '../utils/dbConnect';
import Layout from '../components/layout';
import Item from '../models/item';
import ItemsInIndex from '../components/itemsInIndex';
import { useItemsDispatch } from './contexts/ProductsContext';
import { useUserDispatch, useUser } from './contexts/userContext';
import { useIns, useInsDispatch } from './contexts/CartContext';
import { usefunctions } from './contexts/functionContext';

export default function Index({ items }) {
    var temp;
    const { user, tmpuser } = useUser();
    const { setUser, setTmpuser } = useUserDispatch();

    const { setItems, setItemsLen } = useItemsDispatch();

    const { instances, inslen } = useIns();
    const {
        setInstances,
        setInsLen,
        setItemCount,
        setTotal,
    } = useInsDispatch();

    const { GetAllCarts } = usefunctions();

    useEffect(() => {
        setItemsLen(items.length ? items.length : 0);
    }, [items]);

    useEffect(() => {
        if (!user) {
            //set user
            if (localStorage.getItem('key')) {
                temp = localStorage.getItem('key');
            } else {
                temp = Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(0, 12);
                localStorage.setItem('key', temp);
            }
            setTmpuser(temp);
        }
    }, [user, tmpuser]);

    useEffect(() => {
        var usr = user || tmpuser;
        usr &&
            GetAllCarts(usr, setInstances, setInsLen, setItemCount, setTotal);
    }, [user, tmpuser]);

    return (
        <Layout>
            {/* Create a card for each item */}
            <div className="card-columns">
                {items.map((item) => (
                    <ItemsInIndex item={item} key={item._id} />
                ))}
            </div>
        </Layout>
    );
}
/* Retrieves item(s) data from mongodb database  */
export async function getStaticProps() {
    //export async function getServerSideProps() {
    await dbConnect();

    // find all the data in our database
    const result = await Item.find({});
    const items = JSON.parse(JSON.stringify(result));

    return { props: { items: items } };
}
