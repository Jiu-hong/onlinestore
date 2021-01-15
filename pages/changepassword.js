import { useState } from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { validatedchgpw } from '../utils/utils';

export default function ChangePassword() {
  const router = useRouter();

  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');
    //error
    const err = validatedchgpw(oldpassword, newpassword, confirmpassword);
    // ClearErrorState();
    if (err) {
      setErrors(err);
      return;
    }

    //AWS Cognito integration
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldpassword, newpassword);
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
            <h2>Change Password</h2>

            <input
              className="form-control shadow-none mb-3"
              placeholder="oldpassword"
              name="oldpassword"
              required
              value={oldpassword}
              onChange={(e) => setOldpassword(e.target.value)}
            />
            <input
              className="form-control shadow-none mb-3"
              placeholder="newpassword"
              name="newpassword"
              required
              value={newpassword}
              onChange={(e) => setNewpassword(e.target.value)}
            />
            <input
              className="form-control shadow-none"
              placeholder="confirmpassword"
              name="confirmpassword"
              type="password"
              required
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>

          <button className="btn btn-success mr-3">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
