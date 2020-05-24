import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

const Home = () => {
  // eslint-disable-next-line prefer-const
  let token = Cookies.get('token');
  if (!token) return <Redirect to="/signin" />;

  return <div>Home</div>;
};

export default Home;
