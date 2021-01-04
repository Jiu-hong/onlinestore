import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import CartInstances from '../components/CartInstances';
import { useUserDispatch, useUser } from './contexts/userContext';
import { useIns, useInsDispatch } from './contexts/CartContext';
import { usefunctions } from './contexts/functionContext';

import { formatNumber } from '../utils/utils';
import styles from '../styles/cart.module.css';
import { useRouter } from 'next/router';

export default function Cart() {
    var temp;
    const router = useRouter();
    const { user, tmpuser } = useUser();
    const { setUser, setTmpuser } = useUserDispatch();
    const [visible, setVisible] = useState(false);

    const { instances, itemCount, total } = useIns();
    const {
        setInstances,
        setInsLen,
        setItemCount,
        setTotal,
    } = useInsDispatch();
    const { GetAllCarts } = usefunctions();

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

    const handleCheckout = () => {
        if (
            instances &&
            instances.filter((instance) => instance.check === true).length > 0
        ) {
            router.push('/cart/checkout');
        } else {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 3000);
        }
    };
    return (
        <Layout>
            <div className="container mt-3">
                <hr />
                {instances &&
                    instances.map((iteminstance) => {
                        return (
                            <CartInstances
                                iteminstance={iteminstance}
                                key={iteminstance._id}
                            />
                        );
                    })}
                {(!instances || instances.length == 0) && <div>Empty cart</div>}
                {instances && instances.length > 0 && (
                    <div className="row">
                        <div className=""></div>
                        <div className="">Total count: {itemCount}</div>
                        <div className="">
                            Total price: {formatNumber(total)}
                        </div>
                        <button
                            className={styles.checkoutbutton}
                            onClick={handleCheckout}
                        >
                            <span
                                style={{
                                    visibility: visible ? 'visible' : 'hidden',
                                }}
                                className={styles.tooltiptext}
                            >
                                Please select
                            </span>
                            check out
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
}
