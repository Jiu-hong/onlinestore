import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useInsDispatch, useIns } from '../pages/contexts/CartContext';
import { useUser } from '../pages/contexts/userContext';
import { usefunctions } from '../pages/contexts/functionContext';
import { formatNumber } from '../utils/utils';
import styles from '../styles/index.module.css';

export default function ItemsInIndex({ item }) {
    //const { dispatch } = useInsDispatch();
    const { AddToCart } = usefunctions();
    const [busy, setBusy] = useState(false);
    const [mgvisible, setMgvisible] = useState(false);
    const [inscount, setInscount] = useState('');
    const [inscount2, setInscount2] = useState(0);
    const divEL = useRef(null);

    const {
        setInstances,
        setInsLen,
        setItemCount,
        setTotal,
    } = useInsDispatch();
    const { itemCount, total, instances } = useIns();

    useEffect(() => {
        console.log('I am in effect in itemindex.js');
        instances &&
            instances.find((instance) => {
                if (instance.item._id === item._id) {
                    setInscount(instance.quantity);
                }
            });
    }, [instances]);

    const { user, tmpuser } = useUser();
    var usr = user || tmpuser;

    const handleIncrease = (e) => {
        if (divEL.current) {
            setBusy(true);
        }
        AddToCart(
            1,
            item._id,
            usr,

            setInstances,
            setInsLen,
            setItemCount,
            setTotal
        ).then(() => {
            if (divEL.current) {
                setBusy(false);
                setMgvisible(e);
            }
        });
    };

    return (
        <>
            <div key={item._id} ref={divEL}>
                <div className="card card-body">
                    <Link href="/store/[id]" as={`/store/${item._id}`}>
                        <a>
                            <Image
                                src={item.image[0]}
                                height={300}
                                width={300}
                            />
                            <p className="item-name">{item.title}</p>
                        </a>
                    </Link>

                    <p className="text-left">{formatNumber(item.price)}</p>

                    <div className={styles.addline}>
                        <span
                            className={
                                mgvisible === item ? styles.show : styles.hidden
                            }
                        >
                            ✓ added
                        </span>

                        <button
                            onClick={() => handleIncrease(item)}
                            className="btn btn-success"
                            disabled={busy}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
