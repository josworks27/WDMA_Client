import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import './App.css';
import Validation from './pages/Validation';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signin"
          render={() => (token ? <Redirect to="/" /> : <Signin />)}
        />
        <Route exact path="/validation" component={Validation} />
      </Switch>
    </div>
  );
};

export default App;
