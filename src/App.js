import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './pages/nav/Nav';
import Main from './pages/Main';
import Dress from './pages/dress/Dress';
import Signin from './pages/signin/Signin';
import Validation from './pages/signup/Validation';
import Signup from './pages/signup/Signup';
import Forgot from './pages/forgot/Forgot';
import ForgotMail from './pages/forgot/ForgotMail';
import ForgotPassword from './pages/forgot/ForgotPassword';
import Profile from './pages/profile/Profile';
import MyAccount from './pages/profile/MyAccount';
import MyHistory from './pages/profile/MyHistory';
import ChangePassword from './pages/profile/ChangePassword';
import NotFound from './pages/NotFound';

import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/dress" component={Dress} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/validation" component={Validation} />
        <Route path="/forgot/mail" component={ForgotMail} />
        <Route path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/forgot" component={Forgot} />
        <Route path="/profile/account" component={MyAccount} />
        <Route path="/profile/history" component={MyHistory} />
        <Route path="/profile/change" component={ChangePassword} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
