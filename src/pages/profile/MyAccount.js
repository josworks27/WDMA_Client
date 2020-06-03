import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import MyAccountInput from '../../components/profile/MyAccountInput';

const MyAccount = ({ history }) => {
  let token = Cookies.get('token');

  const { me } = history.location.state;

  if (!token) return <Redirect to="/signin" />;
  return (
    <>
      <MyAccountInput me={me} history={history} />
    </>
  );
};

export default MyAccount;
