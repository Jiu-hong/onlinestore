import { useState } from 'react';

import Layout from '../components/layout';

import { useRouter } from 'next/router';

import { Auth } from 'aws-amplify';
import { validatedForm } from '../utils/utils';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');
    //error
    const err = validatedForm(username, email, password, confirmpassword);
    // ClearErrorState();
    if (err) {
      setErrors(err);
      return;
    }

    //AWS Cognito integration
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
        },
      });

      router.replace('/welcome');
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <p className="text-danger">{errors}</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              username:
              <input
                className="form-control"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Email address:
              <input
                className="form-control"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                className="form-control"
                placeholder="Enter password"
                required
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              confirmpassword:
              <input
                className="form-control"
                placeholder="Enter password"
                required
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
            </label>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
