import Layout from '../../components/layout';
import ToChkInstances from '../../components/ToChkInstances';
import { useUser } from '../contexts/userContext';
import { useIns, useInsDispatch } from '../contexts/CartContext';
import { usefunctions } from '../contexts/functionContext';
import { formatNumber } from '../../utils/utils';
import { useRouter } from 'next/router';
import styles from './checkout.module.css';

export default function ToCheckOut() {
  const { user, tmpuser } = useUser();
  var usr = user || tmpuser;
  const router = useRouter();

  const { instances, itemCount, total, orders } = useIns();
  const {
    setInstances,
    setInsLen,
    setItemCount,
    setTotal,
    setOrders,
    setChkmsg,
  } = useInsDispatch();
  const { checkOut } = usefunctions();

  const handleChkOut = () => {
    checkOut(usr, setInstances, setInsLen, setItemCount, setTotal);
    setChkmsg(true);
    setTimeout(() => setChkmsg(false), 3000);
    router.push('/order');
  };

  const handleCancel = () => {
    router.push('/cart');
  };
  return (
    <Layout>
      <div className='container-fluid mt-3'>
        {instances &&
          instances.filter((instance) => instance.check === true).length >
            0 && (
            <div className='mt-3'>
              <div className={styles.title}>
                <span className='ml-2'>You are going to check out:</span>
              </div>

              {instances
                .filter((instance) => instance.check === true)
                .map((checkedins) => {
                  return (
                    <ToChkInstances
                      checkedins={checkedins}
                      key={checkedins._id}
                    />
                  );
                })}
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-3'>Total count: {itemCount}</div>
                  <div className=' col-sm-3'>
                    Total price: {formatNumber(total)}
                  </div>

                  <button
                    className='btn btn-danger btn col-sm-2'
                    onClick={handleCancel}
                  >
                    cancel
                  </button>
                  <div className='col-sm-2'></div>
                  <button
                    className='btn btn-success col-sm-2'
                    onClick={handleChkOut}
                  >
                    confirm
                  </button>
                </div>
              </div>
            </div>
          )}

        {((instances &&
          instances.filter((instance) => instance.check === true).length ===
            0) ||
          !instances ||
          instances.length == 0) && <div>No product to check out</div>}
      </div>
    </Layout>
  );
}
