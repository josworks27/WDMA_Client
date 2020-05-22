import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className="container">
      <h1>Choose</h1>
      <div>
        <button type="button">
          <Link to="/forgot/mail">Find Email</Link>
        </button>
        <br />
        <button type="button">
          <Link to="/forgot/password">Find Password</Link>
        </button>
      </div>
    </div>
  );
};

export default Forgot;
