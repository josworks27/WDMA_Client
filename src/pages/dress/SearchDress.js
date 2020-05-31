import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

const SearchDress = () => {
  let token = Cookies.get('token');

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <>
          <h1>Search Dress</h1>
        </>
      )}
    </>
  );
};

export default SearchDress;
