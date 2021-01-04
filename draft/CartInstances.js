import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useIns, useInsDispatch } from '../pages/contexts/CartContext';
import { useUser } from '../pages/contexts/userContext';
import { usefunctions } from '../pages/contexts/functionContext';
import styles from '../styles/cart.module.css';
import Image from 'next/image';
import { formatNumber } from '../utils/utils';

export default function CartInstances({ iteminstance }) {
    const inputEL = useRef(null);
    const checkEL = useRef(null);
    const [incdis, setIncdis] = useState(false);
    const [decdis, setDecdis] = useState(false);
    const [dltdis, setDltdis] = useState(false);
    const [price, setPrice] = useState(0);

    const { user, tmpuser } = useUser();
    var usr = user || tmpuser;
    const { ChangeToCart, DeleteIns, ChangeAddCart, ChgChk } = usefunctions();
    const {
        setInstances,
        setInsLen,
        setItemCount,
        setTotal,
    } = useInsDispatch();
    const { instances } = useIns();

    //https://stackoverflow.com/questions/6649327/regex-to-remove-letters-symbols-except-numbers
    const handleCount = (e) => {
        var v = e.target.value.replace(/\D+/g, '').replace(/^0+/, '');
        inputEL.current.value = v;
        setIncdis(parseInt(inputEL.current.value) >= 999);
        setDecdis(parseInt(inputEL.current.value) <= 1);
    };

    const handleIncrease = (e) => {
        setIncdis(true);
        setDecdis(true);
        setDltdis(true);
        inputEL.current.value = parseInt(inputEL.current.value) + 1;
        setPrice(
            inputEL.current && inputEL.current.value * iteminstance.item.price
        );
        //hanle DB -> plus value
        ChangeAddCart(
            1,
            iteminstance._id,
            usr,
            instances,
            setInstances,
            setInsLen,
            setItemCount,
            setTotal
        ).then(() => {
            if (inputEL.current) {
                setIncdis(parseInt(inputEL.current.value) >= 999);
                setDecdis(parseInt(inputEL.current.value) <= 1);
            }
            setDltdis(false);
        });
    };
    const handleDecrease = (e) => {
        setIncdis(true);
        setDecdis(true);
        setDltdis(true);
        if (inputEL.current) {
            inputEL.current.value = parseInt(inputEL.current.value) - 1;
        }

        setPrice(
            inputEL.current && inputEL.current.value * iteminstance.item.price
        );
        //hanle DB -> minus value
        ChangeAddCart(
            -1,
            iteminstance._id,
            usr,
            instances,
            setInstances,
            setInsLen,
            setItemCount,
            setTotal
        ).then(() => {
            setIncdis(
                parseInt(inputEL.current && inputEL.current.value) >= 999
            );
            setDecdis(parseInt(inputEL.current && inputEL.current.value) <= 1);
            setDltdis(false);
        });
    };

    const handlefocus = () => {
        setIncdis(true);
        setDecdis(true);
        setDltdis(true);
        //handle DB -> change value

        inputEL.current &&
            !inputEL.current.value &&
            (inputEL.current.value = iteminstance.quantity);
        setPrice(
            inputEL.current && inputEL.current.value * iteminstance.item.price
        );
        ChangeToCart(
            inputEL.current.value,
            iteminstance._id,
            usr,
            instances,
            setInstances,
            setInsLen,
            setItemCount,
            setTotal
        ).then(() => {
            if (inputEL.current) {
                if (inputEL.current) {
                    setIncdis(parseInt(inputEL.current.value) >= 999);
                    setDecdis(parseInt(inputEL.current.value) <= 1);
                }
                setDltdis(false);
            }
        });
    };

    const handleDelIns = () => {
        DeleteIns(
            iteminstance._id,
            usr,
            instances,
            setInstances,
            setInsLen,
            setItemCount,
            setTotal
        );
    };

    const handleCheck = () => {
        ChgChk(
            checkEL.current.checked,
            iteminstance._id,
            usr,
            instances,
            setInstances,
            setInsLen,
            setItemCount,
            setTotal
        ).then(() => {
            console.log('instances after ChgChk: ', instances);
        });
    };
    useEffect(() => {
        if (inputEL.current) {
            setIncdis(parseInt(inputEL.current.value) >= 999);
            setDecdis(parseInt(inputEL.current.value) <= 1);
            setPrice(
                inputEL.current &&
                    inputEL.current.value * iteminstance.item.price
            );
        }
    }, [user, tmpuser]);
    return (
        <>
            <div key={iteminstance._id} className={styles.gridcontainer}>
                <div>
                    <input
                        type="checkbox"
                        //value='true'
                        ref={checkEL}
                        defaultChecked={iteminstance.check}
                        onChange={() => handleCheck(iteminstance)}
                    />
                </div>
                <div>
                    <Link
                        href="/store/[id]"
                        as={`store/${iteminstance.item._id}`}
                    >
                        <a className="">
                            <Image
                                src={iteminstance.item.image[0]}
                                height={70}
                                width={70}
                            />
                        </a>
                    </Link>
                </div>
                <div>
                    <Link
                        href="/store/[id]"
                        as={`store/${iteminstance.item._id}`}
                    >
                        <a className="btn btn-link btn-sm">
                            {iteminstance.item.title}
                        </a>
                    </Link>
                </div>

                <div>unit price: {formatNumber(iteminstance.item.price)}</div>

                <div className={styles.inputwraper1}>
                    <button
                        onClick={() => handleDecrease(iteminstance)}
                        className={styles.minus1}
                        disabled={decdis}
                    >
                        - minus
                    </button>
                    <input
                        type="text"
                        ref={inputEL}
                        onInput={handleCount}
                        onBlur={handlefocus}
                        //onChange={handleCount}
                        className={styles.input1}
                        defaultValue={iteminstance.quantity}
                    />
                    <button
                        onClick={() => handleIncrease(iteminstance)}
                        className={styles.add1}
                        disabled={incdis}
                    >
                        + add
                    </button>
                </div>
                <div>price: {formatNumber(price)}</div>
                <div>
                    <button
                        onClick={() => handleDelIns(iteminstance)}
                        className="btn btn-link btn-sm disable"
                        disabled={dltdis}
                    >
                        delete
                    </button>
                </div>
            </div>
            <hr />
        </>
    );
}
