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
 
  const [inscount, setInscount] = useState('');
  const { user,  tmpuser } = useUser();

  const divEL = useRef(null);

  const { setInstances, setInsLen, setItemCount, setTotal } = useInsDispatch();
  const {  instances } = useIns();

  useEffect(() => {
    setInscount('');
    instances &&
      instances.find((instance) => {
        if (instance.item._id === item._id) {
          setInscount(instance.quantity);
        }
      });
  }, [instances,user, tmpuser]);

 
  var usr = user?.username || tmpuser;

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
     
      }
    });
  };

  return (
    <>
      <div key={item._id} ref={divEL}>
        <div className="card card-body">
          <Link href="/store/[id]" as={`/store/${item._id}`}>
            <a>
              <Image src={item.image[0]} height={300} width={300} />
              <p className="item-name">{item.title}</p>
            </a>
          </Link>

          <p className="text-left">{formatNumber(item.price)}</p>

          <div className={styles.addline}>
            <span className={inscount ? styles.show : styles.hidden}>
              {inscount} in cart
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
