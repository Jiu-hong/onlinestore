import Layout from '../../../components/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {  useRef, useState } from 'react';
import { useIns, useInsDispatch } from '../../contexts/CartContext';
import { usefunctions } from '../../contexts/functionContext';
import { useUser } from '../../contexts/userContext';
import styles from '../../../styles/comment.module.css';
import { formatNumber } from '../../../utils/utils';


export default function Comment() {
  const [error, setError] = useState([]);
  const { user, tmpuser } = useUser();
  const textEL = useRef(null);

 
  const { PostComment } = usefunctions();

  const { grouporders } = useIns();
  const { setOrders, setCmtmsg } = useInsDispatch();

  const router = useRouter();
  var ins;
  if (router.query.ins) {
    ins = JSON.parse(router.query.ins);
  }

  const imgurlfordb = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    var usr = user || tmpuser;

    PostComment(
      ins._id,
      textEL.current.value,
      imgurlfordb,
      usr,
      grouporders,
      setOrders,
      setError
    ).then((res) => {
      if (res.status === 201) {
        // GetAllOrder(user, setOrders); //??
        setCmtmsg(ins._id);
        setTimeout(() => {
          setCmtmsg('');
        }, 3000);
        //router.push(`/order/#${ins._id}`);
        router.back();
      } else {
        console.log('result failure in comment: ', res);
      }
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Layout>
      {ins && (
        <div className='container-fluid mt-3'>
          <div className={styles.gridcontainer}>
            <div>
              <Image src={ins.item.image[0]} height={70} width={70} />
              <div>{ins.item.title}</div>
            </div>

            <div>unit price: {formatNumber(ins.item.price)}</div>
            <div>quantity: {ins.quantity}</div>
            <div>price: {formatNumber(ins.item.price * ins.quantity)}</div>
          </div>

          {ins.commenttext && (
            <div>
              <div className={styles.oldtitle}>Original Comment</div>
              <div>{ins.commenttext}</div>
            </div>
          )}
          <hr />
          
          <form
            onSubmit={handleSubmit}
            method='post'
          >
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className={styles.title}>New Comment (15-500 characters)</div>

            <textarea
              name='textarea'
              ref={textEL}
              className='form-control mb-3 mt-3'
              rows='5'
              required
              minLength='15'
              maxLength='500'
            ></textarea>

            <button className='btn btn-success mr-3'>submit</button>
            <button className='btn btn-warning mr-3' onClick={handleCancel}>
              cancel
            </button>
          </form>
        </div>
      )}
    </Layout>
  );
}
