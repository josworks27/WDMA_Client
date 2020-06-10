import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_REQUEST } from '../../store/modules/user/user';

const Profile = () => {
  let token = Cookies.get('token');

  const { me, load, loadUserError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_USER_REQUEST });
  }, [dispatch]);

  useEffect(() => {
    if (token && loadUserError) {
      alert(loadUserError);
    }
  }, [loadUserError]);

  if (!token) return <Redirect to="/signin" />;
  return (
    <main>
      <div className="profile-buttons">
        <button type="button">
          <Link
            to={{
              pathname: '/profile/account',
              state: {
                me,
              },
            }}
          >
            My Account
          </Link>
        </button>
        <button type="button">
          <Link
            to={{
              pathname: '/profile/history',
              state: {
                load,
              },
            }}
          >
            My History
          </Link>
        </button>
        <button type="button">
          <Link to="/profile/change">Change Password</Link>
        </button>
      </div>
    </main>
  );
};

export default Profile;
