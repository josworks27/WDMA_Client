import React from 'react';

const ForgotMailCheck = ({ history, user }) => {
  const { email } = user[0];
  const store = user[0]['store.name'];

  const handleClick = (event) => {
    event.preventDefault();
    history.push('/signin');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>{`Your Email accout is ${email}`}</h1>
        <h2>{`Belongs to ${store}`}</h2>
      </div>
      <button type="button" onClick={handleClick}>
        Back to Sign In
      </button>
    </div>
  );
};

export default ForgotMailCheck;
