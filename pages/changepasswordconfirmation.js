import Link from 'next/link';
import Layout from '../components/layout';

export default function ChangePasswordConfirmation() {
  return (
    <Layout>
      <div className="container mt-3">
        <div className="form-group">
          <h2>Change Password</h2>
          <p>Your password has been successfully updated!</p>
        </div>
        <Link href="/login">
          <a className="btn btn-success">Login</a>
        </Link>
      </div>
    </Layout>
  );
}
