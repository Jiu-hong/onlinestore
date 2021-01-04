import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import CartInstances from '../components/CartInstances';
import { useUserDispatch, useUser } from './contexts/userContext';
import { useIns, useInsDispatch } from './contexts/CartContext';
import { usefunctions } from './contexts/functionContext';

import { useRouter } from 'next/router';

export default function Logon() {
    const router = useRouter();

    const formEL = useRef(null);
    const [error, setError] = useState('');
    const handleLogon = (e) => {
        e.preventDefault();
        setError('');
        const formData = new FormData(formEL.current);
        fetch('/api/user_register_post', {
            method: 'post',
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.status === 201) {
                    console.log('result.data: ', result.data);
                    //router.back();
                    router.push({
                        pathname: '/logon',
                        query: { msg: 'Succesfully registered!' },
                    });
                } else {
                    setError(result.error);
                }
            });
    };

    return (
        <Layout>
            <div className="container mt-3">
                {console.log('error: ', error)}
                {error.length > 0 &&
                    error.map((err, index) => (
                        <p style={{ color: 'red' }} key={index}>
                            {err}
                        </p>
                    ))}
                <form
                    className="form"
                    ref={formEL}
                    onSubmit={handleLogon}
                    method="post"
                    encType="multipart/form-data"
                >
                    <div className="form-group">
                        <label>
                            username:
                            <input
                                className="form-control"
                                placeholder="Enter email"
                                name="username"
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
                                name="email"
                                required
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
                                name="password"
                                required
                                type="password"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Password:
                            <input
                                className="form-control"
                                placeholder="Enter password"
                                name="confirmPassword"
                                required
                                type="password"
                            />
                        </label>
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </Layout>
    );
}
