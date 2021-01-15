import { useState } from 'react';

import Layout from '../components/layout';

import { useUserDispatch } from './contexts/userContext';

import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { validatedEmail } from '../utils/utils';

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState('');
  const { setUser, setAuthStatus } = useUserDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');

    const err = validatedEmail(email);

    if (err) {
      setErrors(err);
      return;
    }

    //AWS Cognito integration
    try {
      await Auth.forgotPassword(email);
      router.push('/forgotpasswordverification');
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <form className="form mt-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Forgot your password?</h2>
            <p>
              Please enter the email address associated with your account and
              we'll email you a password reset link.
            </p>

            <input
              className="form-control shadow-none"
              placeholder="Enter email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-success mr-3">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
