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
        <>
          <h1>Dress Stats</h1>
        </>
      )}
    </>
  );
};

export default DressStats;
