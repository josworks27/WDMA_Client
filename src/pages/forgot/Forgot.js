import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <main>
      <div className="forgot-buttons">
        <div className="forgot-button">
          <button type="button">
            <Link to="/forgot/mail">Find Email</Link>
          </button>
        </div>
        <div className="forgot-button">
          <button type="button">
            <Link to="/forgot/password">Find Password</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Forgot;
