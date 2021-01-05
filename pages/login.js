import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

import { useUserDispatch } from './contexts/userContext';

import { useRouter } from 'next/router';

export default function Logon() {
  const router = useRouter();

  const { setUser } = useUserDispatch();

  const [msg, setMsg] = useState('');

  useEffect(() => {
    setMsg(router.query?.msg);
  }, []);

  const formEL = useRef(null);
  const [error, setError] = useState('');

  const handleLogon = (e) => {
    e.preventDefault();
    const formData = new FormData(formEL.current);
    fetch('/api/user_logon_post', {
      method: 'post',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 201) {
          setUser(result.data.username);
          router.replace('/');
        } else {
          setError(result.error);
        }
      });
  };

  return (
    <Layout>
      <div className='container mt-3'>
        {error.length > 0 &&
          error.map((err, index) => (
            <p style={{ color: 'red' }} key={index}>
              {err}
            </p>
          ))}
        <span style={{ color: '#155724', background: ' #d4edda' }}>{msg}</span>
        <form
          className='form mt-3'
          ref={formEL}
          onSubmit={handleLogon}
          method='post'
          encType='multipart/form-data'
        >
          <div className='form-group'>
            <label>
              Email address:
              <input
                className='form-control'
                placeholder='Enter email'
                name='email'
                required
                type='email'
              />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Password:
              <input
                className='form-control'
                placeholder='Enter password'
                name='password'
                required
                type='password'
              />
            </label>
          </div>
          <button className='btn btn-success mr-3'>Submit</button>
          <Link href='/register'>
            <a className='btn btn-info'>Register</a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}
