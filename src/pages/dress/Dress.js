import React from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route, Switch } from 'react-router-dom';

import DressList from '../../components/dressDetail/DressList';
import DressDetail from '../../components/dressDetail/DressDetail';
import AddDress from './AddDress';
import SearchDress from './SearchDress';
import DressStats from './DressStats';

const Dress = ({ match }) => {
  let token = Cookies.get('token');

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={DressList} />
            <Route path={`${match.path}/add`} component={AddDress} />
            <Route path={`${match.path}/search`} component={SearchDress} />
            <Route path={`${match.path}/stats`} component={DressStats} />
            <Route path={`${match.path}/:id`} component={DressDetail} />
          </Switch>
        </div>
      )}
    </>
  );
};

export default Dress;
