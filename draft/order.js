import { useEffect } from 'react';
import styles from '../styles/order.module.css';
import Link from 'next/link';
import Image from 'next';
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
            <div className="container mt-3">
                <div className="row">
                    <div className={chkmsg ? styles.fadein : styles.fadeout}>
                        checkout success!
                    </div>
                </div>
                <div className="row">
                    {orders && (
                        <table className={styles.table}>
                            <caption></caption>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>
                                        Your orders
                                    </th>
                                    <th style={{ width: '15%' }}>name</th>
                                    <th style={{ width: '15%' }}>unit price</th>
                                    <th style={{ width: '15%' }}>quantity</th>
                                    <th style={{ width: '15%' }}>price</th>
                                    <th style={{ width: '35%' }}>comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => {
                                    return (
                                        <tr key={order._id} id={order._id}>
                                            <td>
                                                <Link
                                                    href="/store/[id]"
                                                    as={`store/${order.item._id}`}
                                                >
                                                    <a className="btn btn-link btn-sm mr-2">
                                                        <img
                                                            src={
                                                                order.item
                                                                    .image[0]
                                                            }
                                                            height={70}
                                                            width={70}
                                                        />
                                                    </a>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    href="/store/[id]"
                                                    as={`store/${order.item._id}`}
                                                >
                                                    <a className="btn btn-link btn-sm">
                                                        {order.item.title}
                                                    </a>
                                                </Link>
                                            </td>
                                            <td>
                                                {formatNumber(order.item.price)}
                                            </td>

                                            <td>{order.quantity}</td>
                                            <td>
                                                {formatNumber(
                                                    order.item.price *
                                                        order.quantity
                                                )}
                                            </td>
                                            <td className={styles.comment}>
                                                <div className="mb-3">
                                                    {order.commenttext}
                                                </div>
                                                {order.commentimage && (
                                                    <div>
                                                        {order.commentimage.map(
                                                            (imgsrc) => (
                                                                <img
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
                                                        pathname:
                                                            '/store/[id]/comment',
                                                        query: {
                                                            ins: JSON.stringify(
                                                                order
                                                            ),
                                                        },
                                                    }}
                                                    as={`store/${order.item._id}/comment`}
                                                >
                                                    <a className={styles.des}>
                                                        <div>
                                                            {order.commenttext &&
                                                                'update'}
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
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </Layout>
    );
}
