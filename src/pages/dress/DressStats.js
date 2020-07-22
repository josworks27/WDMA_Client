import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

const DressStats = () => {
  let token = Cookies.get('token');

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <main>
          <h1>Creating Dress Stats...</h1>
        </main>
      )}
    </>
  );
};

export default DressStats;
