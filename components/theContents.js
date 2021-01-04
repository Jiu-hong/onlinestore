import Store from '../pages/store';
import Link from 'next/link';

const theContents = () => {
  return (
    <>
      <Link href='/about'>About </Link>
      <Link href='/store'>Store </Link>
      <Link href='/cart'> cart</Link>
    </>
  );
};

export default theContents;
