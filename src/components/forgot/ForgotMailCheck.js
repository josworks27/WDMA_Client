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
      <h1>{`Your Email accout is ${email}`}</h1>
      <div>{`Belongs to ${store}`}</div>
      <button type="button" onClick={handleClick}>
        Back to Sign In
      </button>
    </div>
  );
};

export default ForgotMailCheck;
