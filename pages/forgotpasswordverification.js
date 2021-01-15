import { useState } from 'react';

import Layout from '../components/layout';

import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { validatedcode } from '../utils/utils';

export default function ForgotPasswordVerification() {
  const router = useRouter();

  const [verificationcode, setVerificationcode] = useState('');
  const [email, setEmail] = useState('');
  const [newpassword, setNewpassword] = useState('');

  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');
    //error
    const err = validatedcode(email, newpassword);
    // ClearErrorState();
    if (err) {
      setErrors(err);
      return;
    }

    //AWS Cognito integration
    try {
      await Auth.forgotPasswordSubmit(email, verificationcode, newpassword);
      router.push('/changepasswordconfirmation');
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <p className="text-danger">{errors}</p>
        <form className="form mt-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Set new password</h2>
            <p>
              Please enter the verification code sent to your email address
              below, your emailaddress and a new password.
            </p>

            <input
              className="form-control shadow-none mb-3"
              placeholder="verificationcode"
              name="verificationcode"
              required
              value={verificationcode}
              onChange={(e) => setVerificationcode(e.target.value)}
            />
            <input
              className="form-control shadow-none mb-3"
              placeholder="Enter email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control shadow-none"
              placeholder="newpassword"
              name="newpassword"
              type="password"
              required
              value={newpassword}
              onChange={(e) => setNewpassword(e.target.value)}
            />
          </div>

          <button className="btn btn-success mr-3">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
