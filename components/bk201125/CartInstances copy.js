import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useInsDispatch } from '../pages/contexts/CartContext';
import { useUser } from '../pages/contexts/userContext';
import { usefunctions } from '../pages/contexts/functionContext';

export default function CartInstances({ iteminstance }) {
  const [incdis, setIncdis] = useState(false);
  const [decdis, setDecdis] = useState(false);
  const [dltdis, setDltdis] = useState(false);
  const [count, setCount] = useState(iteminstance.quantity);

  const user = useUser();
  const { ChangeToCart, DeleteIns, ChangeAddCart } = usefunctions();
  const { setInstance, setInsLen } = useInsDispatch();

  const handleIncrease = (e) => {
    setIncdis(true);
    setDecdis(true);
    setDltdis(true);
    setCount(count + 1);
    console.log('count in handleIncrease: ', count);
    //hanle DB -> plus value
    ChangeAddCart(1, iteminstance._id, user, setInstance, setInsLen).then(
      () => {
        setIncdis(count >= 999);
        setDecdis(count <= 1);
        setDltdis(false);
      }
    );
  };
  const handleDecrease = (e) => {
    setIncdis(true);
    setDecdis(true);
    setDltdis(true);
    setCount(count - 1);
    console.log('count in handleDecrease: ', count);

    //hanle DB -> minus value
    ChangeAddCart(-1, iteminstance._id, user, setInstance, setInsLen).then(
      () => {
        setIncdis(count >= 999);
        setDecdis(count <= 1);
        setDltdis(false);
      }
    );
  };

  const handlefocus = () => {
    setIncdis(true);
    setDecdis(true);
    setDltdis(true);
    //handle DB -> change value
    ChangeToCart(count, iteminstance._id, user, setInstance, setInsLen).then(
      () => {
        setIncdis(count >= 999);
        setDecdis(count <= 1);
        setDltdis(false);
      }
    );
  };

  const handleDelIns = () => {
    DeleteIns(iteminstance._id, user, setInstance, setInsLen);
  };

  useEffect(() => {
    setIncdis(count >= 999);
    setDecdis(count <= 1);
    console.log('I am in effect');
  }, [user]);

  const handleCount = (e) => {
    if (e.target.validity.valid) {
      if (e.target.value == '') {
        setCount(0);
      } else {
        var f = e.target.value.replace(/^0+/, '');
        if (!f) {
          setCount(e.target.value);
        } else {
          setCount(f);
        }
      }
      console.log('count in handleCount: ', count);
    } else {
      // invalid input
    }
  };
  return (
    <>
      <input
        id='id1'
        type='number'
        value={count}
        onInput={handleCount}
        onBlur={handlefocus}
        onChange={handleCount}
        className='form-control input-lg'
        pattern='[1-9][0-9]*'
        style={{ width: '100px' }}
      />
      <div key={iteminstance._id}>
        <div className='card card-body'>
          <img
            src={iteminstance.item.image}
            style={{
              display: 'block',
              margin: '0 auto 10px',
              height: '200px',
              width: '200px',
            }}
          />
          <p className='item-name'>{iteminstance.item.title}</p>

          <h3 className='text-left'>price: {iteminstance.item.price}</h3>

          <div className='text-right'>
            <Link href='/[id]/detail' as={`/${iteminstance.item._id}/detail`}>
              <a className='btn btn-link btn-sm mr-2'>detail</a>
            </Link>

            <button
              onClick={() => handleDelIns(iteminstance)}
              className='btn btn-outline-primary btn-sm disable'
              disabled={dltdis}
            >
              Delete Item
            </button>

            <button
              onClick={() => handleIncrease(iteminstance)}
              className='btn btn-outline-primary btn-sm disable'
              disabled={incdis}
            >
              + add
            </button>

            <button
              onClick={() => handleDecrease(iteminstance)}
              className='btn btn-outline-primary btn-sm disable'
              disabled={decdis}
            >
              - minus
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
