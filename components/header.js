import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import styles from './header.module.scss';

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <Link>
        <a>Store</a>
      </Link>
      <Link>
        <a href='/about'>About</a>
      </Link>
      <Link>
        <a href='/cart'> Cart ({itemCount})</a>
      </Link>
    </header>
  );
};

export default Header;
