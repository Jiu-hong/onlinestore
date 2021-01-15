import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

import { useUserDispatch } from './contexts/userContext';

import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { validatedLogin } from '../utils/utils';

export default function Logon() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const { setUser, setAuthStatus } = useUserDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');
    //error
    const err = validatedLogin(username, email, password);
    // ClearErrorState();
    if (err) {
      setErrors(err);
      return;
    }

    //AWS Cognito integration
    try {
      const user = await Auth.signIn(username, password);

      setAuthStatus(true);
      setUser(user);

      router.push('/');
    } catch (error) {
      // let err = null;
      // !error.message ? (err = { message: error }) : (err = error);
      setErrors(error.message);
      // setErrors({ cognito: error });
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <p className="text-danger">{errors}</p>
        <form className="form mt-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              username:
              <input
                className="form-control"
                placeholder="Enter email"
                name="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                className="form-control"
                placeholder="Enter password"
                name="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <Link href="/forgotPassword">
              <a className="btn-link">forgotpassword</a>
            </Link>
          </div>
          <button className="btn btn-success mr-3">Submit</button>
          <Link href="/register">
            <a className="btn btn-info">Register</a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}
