import React from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import DressList from '../../components/dress/DressList';
import DressDetail from '../../components/dress/DressDetail';

const Dress = ({ match }) => {
  let token = Cookies.get('token');

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <div>
          <h1>Dress</h1>
          <Route exact path={`${match.path}`} component={DressList} />
          <Route path={`${match.path}/:id`} component={DressDetail} />
        </div>
      )}
    </>
  );
};

export default Dress;
