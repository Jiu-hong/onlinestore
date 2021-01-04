import { useEffect } from 'react';
import styles from '../styles/order.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

import { useUserDispatch, useUser } from './contexts/userContext';
import { useIns, useInsDispatch } from './contexts/CartContext';
import { usefunctions } from './contexts/functionContext';

import { formatNumber } from '../utils/utils';

export default function Order() {
    var temp;
    const { user, tmpuser } = useUser();
    var usr = user || tmpuser;
    const { setUser, setTmpuser } = useUserDispatch();

    const { orders, chkmsg, cmtmsg } = useIns();
    // const { abled, msg } = cmtmsg;
    const { setOrders } = useInsDispatch();
    const { GetAllOrder } = usefunctions();

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
        usr && GetAllOrder(usr, setOrders);
    }, [user, tmpuser]);

    return (
        <Layout>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className={chkmsg ? styles.fadein : styles.fadeout}>
                        checkout success!
                    </div>
                </div>
                {orders &&
                    orders.map((order) => (
                        <div key={order._id}>
                            <div className={styles.ordertitle}>
                                checkout time :{' '}
                                {new Date(order.buy_date).toDateString()}{' '}
                                {order.user}
                            </div>
                            <div className="row" key={order._id}>
                                <div className="col-sm-2">
                                    <Link
                                        href="/store/[id]"
                                        as={`store/${order.item._id}`}
                                    >
                                        <a className="btn btn-link btn-sm mr-2">
                                            <Image
                                                src={order.item.image[0]}
                                                height={70}
                                                width={70}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-sm-1">
                                    <Link
                                        href="/store/[id]"
                                        as={`store/${order.item._id}`}
                                    >
                                        <a className={styles.link}>
                                            {order.item.title}
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <span className={styles.key}>
                                        unit price{' '}
                                    </span>
                                    {formatNumber(order.item.price)}
                                </div>
                                <div className="col-sm-2">
                                    <span className={styles.key}>quantity</span>{' '}
                                    {order.quantity}
                                </div>
                                <div className="col-sm-2">
                                    <span className={styles.key}>price </span>
                                    {formatNumber(
                                        order.item.price * order.quantity
                                    )}
                                </div>
                                <div className="col-sm-2">
                                    <span className={styles.key}>comment</span>
                                    <div className={styles.commentwrap}>
                                        {order.commenttext}
                                    </div>
                                    {order.commentimage && (
                                        <div>
                                            {order.commentimage.map(
                                                (imgsrc) => (
                                                    <Image
                                                        key={imgsrc}
                                                        src={imgsrc}
                                                        height={50}
                                                        width={50}
                                                        className="mr-3"
                                                    />
                                                )
                                            )}
                                        </div>
                                    )}
                                    <Link
                                        href={{
                                            pathname: '/store/[id]/comment',
                                            query: {
                                                ins: JSON.stringify(order),
                                            },
                                        }}
                                        as={`store/${order.item._id}/comment`}
                                    >
                                        <a className={styles.des}>
                                            <div>
                                                {order.commenttext && 'update'}
                                                {!order.commenttext &&
                                                    'write comment'}
                                            </div>
                                        </a>
                                    </Link>
                                    <div
                                        className={
                                            cmtmsg === order._id
                                                ? styles.fadein
                                                : styles.fadeout
                                        }
                                    >
                                        comment changed!
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Layout>
    );
}
