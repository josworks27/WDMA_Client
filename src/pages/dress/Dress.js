import React from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import DressList from '../../components/dress/DressList';
import DressDetail from '../../components/dress/DressDetail';

const Dress = ({ match }) => {
  let token = Cookies.get('token');
  if (!token) return <Redirect to="/signin" />;

  return (
    <div>
      <h1>Dress</h1>
      <Route exact path={`${match.url}`} component={DressList} />
      <Route exact path={`${match.url}/:id`} component={DressDetail} />
    </div>
  );
};

export default Dress;
