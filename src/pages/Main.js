import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Main = () => {
  let token = Cookies.get('token');

  return (
    <div>
      <h1>Main</h1>
      <div>About</div>
      <div>
        {token ? (
          <button type="button">
            <Link to="/dress">START</Link>
          </button>
        ) : (
          <button type="button">
            <Link to="/signin">Sign In</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
