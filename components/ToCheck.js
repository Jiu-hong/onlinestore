import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from '../components/layout';
import CartInstances from '../components/CartInstances';
import { useUserDispatch, useUser } from './contexts/userContext';
import { useIns, useInsDispatch } from './contexts/CartContext';
import { usefunctions } from './contexts/functionContext';
import { useInitial, useInitialDispatch } from './contexts/initialContext';
import { formatNumber } from '../utils/utils';

export default function ToCheck() {
  return (
    <Layout>
      <button onClick={checkdb}>check database</button>
      {/* Create a card for each item */}
      <div className='container'>
        {console.log('instances : ', instances)}
        {instances &&
          instances.map((iteminstance) => {
            return (
              <ToChkInstances
                iteminstance={iteminstance}
                key={iteminstance._id}
              />
            );
          })}
        {(!instances || instances.length == 0) && <div>No items</div>}
        <div className='row'>
          <div className='mr-3'>Total count: {itemCount}</div>
          <div className='mr-3'>Total price: {formatNumber(total)}</div>
          <button className='btn btn-success' onClick={handleToChk}>
            check out
          </button>
          <Router>
            <Link to='/cart/toCheck'>check out</Link>
            <Switch>
              <Route path='/cart/toCheck'>
                <ToCheck>hello</ToCheck>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <footer></footer>
    </Layout>
  );
}
