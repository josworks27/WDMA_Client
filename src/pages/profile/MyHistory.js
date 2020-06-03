import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const MyHistory = ({ history }) => {
  let token = Cookies.get('token');
  console.log(history.location.state.load);

  if (!token) return <Redirect to="/signin" />;
  return (
    <>
      <h2>My History</h2>
    </>
  );
};

export default MyHistory;
