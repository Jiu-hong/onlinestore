import Link from 'next/link';

import Image from 'next/image';
import { formatNumber } from '../utils/utils';
import styles from '../pages/cart/checkout.module.css';

export default function ToChkInstances({ checkedins }) {
    return (
        <>
            <div key={checkedins._id} className={styles.gridcontainer}>
                <div>
                    <Link
                        href="/store/[id]"
                        as={`/store/${checkedins.item._id}`}
                    >
                        <a className="btn btn-link btn-sm mr-2">
                            <Image
                                src={checkedins.item.image[0]}
                                height={70}
                                width={70}
                            />
                        </a>
                    </Link>
                </div>
                <div>
                    <Link
                        href="/store/[id]"
                        as={`/store/${checkedins.item._id}`}
                    >
                        <a className="btn btn-link btn-sm  ">
                            {checkedins.item.title}
                        </a>
                    </Link>
                </div>

                <div>unit price: {formatNumber(checkedins.item.price)}</div>

                <div>quantity: {checkedins.quantity}</div>
                <div>
                    price:{' '}
                    {formatNumber(checkedins.item.price * checkedins.quantity)}
                </div>
            </div>
            <hr />
        </>
    );
}
