import Link from 'next/link';
import Layout from '../components/layout';
import { useUser } from '../pages/contexts/userContext';

export default function Profile() {
  const { user } = useUser();
  return (
    <Layout>
      <div className="container mt-3">
        <p className="text-success"> Hello {user?.username}</p>
        <Link href="/cart">
          <a className="btn btn-link">My cart</a>
        </Link>
        <br />
        <Link href="/order">
          <a className="btn btn-link">My order</a>
        </Link>
        <br />
        <Link href="/changepassword">
          <a className="btn btn-link">changepassword</a>
        </Link>
      </div>
    </Layout>
  );
}
