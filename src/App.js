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
import NotFound from './pages/NotFound';

import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/dress" component={Dress} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/validation" component={Validation} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/forgot/mail" component={ForgotMail} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
