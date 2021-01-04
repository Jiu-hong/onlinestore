import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useInsDispatch } from '../pages/contexts/CartContext';
import { useUser } from '../pages/contexts/userContext';
import { usefunctions } from '../pages/contexts/functionContext';

export default function CartInstances({ iteminstance }) {
  const inputEL = useRef(null);
  const [incdis, setIncdis] = useState(false);
  const [decdis, setDecdis] = useState(false);
  const [dltdis, setDltdis] = useState(false);

  const user = useUser();
  const { ChangeToCart, DeleteIns, ChangeAddCart } = usefunctions();
  const { setInstance, setInsLen } = useInsDispatch();

  var a,
    c = false;
  var oldValue = iteminstance.quantity;
  var oldValueforback = iteminstance.quantity;

  const handleCount = (e) => {
    console.log('e: ', e);
    console.log('oldValueforback: ', oldValueforback);
    console.log('oldValue: ', oldValue);
    if (inputEL.current.validity.valid) {
      if (inputEL.current.value == '') {
        //this is for empty
        c = true;
        a = setTimeout(
          () => (inputEL.current.value = iteminstance.quantity),
          2000
        );
      } else {
        c = false;
        //this is for number
        if (a) {
          clearTimeout(a);
          a = null;
        }
        if (e.nativeEvent.inputType !== 'deleteContentBackward') {
          oldValueforback = inputEL.current.value;
        }
        oldValue = inputEL.current.value;
      }
    } else {
      //this is for invalid
      if (!c) {
        //previous is number then use oldValue
        inputEL.current.value = oldValue;
        oldValueforback = inputEL.current.value;
      } else {
        //previous is "" then use oldValueforback
        inputEL.current.value = oldValueforback;
        clearTimeout(a);
        console.log('I am in clear timeout below');
        a = null;
        c = false;
        oldValue = inputEL.current.value;
      }
    }
    setIncdis(parseInt(inputEL.current.value) >= 999);
    setDecdis(parseInt(inputEL.current.value) <= 1);
  };

  const handleIncrease = (e) => {
    setIncdis(true);
    setDecdis(true);
    setDltdis(true);
    inputEL.current.value = parseInt(inputEL.current.value) + 1;
    //hanle DB -> plus value
    ChangeAddCart(1, iteminstance._id, user, setInstance, setInsLen).then(
      () => {
        console.log('I am in handleIncrease');
        setIncdis(parseInt(inputEL.current.value) >= 999);
        setDecdis(parseInt(inputEL.current.value) <= 1);
        setDltdis(false);
      }
    );
  };
  const handleDecrease = (e) => {
    setIncdis(true);
    setDecdis(true);
    setDltdis(true);
    inputEL.current.value = parseInt(inputEL.current.value) - 1;
    //hanle DB -> minus value
    ChangeAddCart(-1, iteminstance._id, user, setInstance, setInsLen).then(
      () => {
        console.log('I am in handleDecrease');
        setIncdis(parseInt(inputEL.current.value) >= 999);
        setDecdis(parseInt(inputEL.current.value) <= 1);
        setDltdis(false);
      }
    );
  };

  const handlefocus = () => {
    setIncdis(true);
    setDecdis(true);
    setDltdis(true);
    //handle DB -> change value
    ChangeToCart(
      inputEL.current.value,
      iteminstance._id,
      user,
      setInstance,
      setInsLen
    ).then(() => {
      console.log('I am in handlefocus');
      setIncdis(parseInt(inputEL.current.value) >= 999);
      setDecdis(parseInt(inputEL.current.value) <= 1);
      setDltdis(false);
    });
  };

  const handleDelIns = () => {
    DeleteIns(iteminstance._id, user, setInstance, setInsLen);
  };

  useEffect(() => {
    setIncdis(parseInt(inputEL.current.value) >= 999);
    setDecdis(parseInt(inputEL.current.value) <= 1);
    console.log('I am in effect');
  }, [user]);
  return (
    <>
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
            <Link href='/[id]' as={`/${iteminstance.item._id}`}>
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
            <input
              id='id1'
              type='text'
              ref={inputEL}
              onInput={handleCount}
              onBlur={handlefocus}
              //onChange={handleCount}
              className='form-control input-lg'
              pattern='[1-9][0-9]*'
              style={{ width: '100px' }}
              defaultValue={iteminstance.quantity}
            />
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
