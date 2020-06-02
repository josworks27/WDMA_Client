import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import AddDressInput from '../../components/addDress/AddDressInput';

const AddDress = ({ history }) => {
  let token = Cookies.get('token');

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <>
          <h1>Add Dress</h1>
          <AddDressInput history={history} />
        </>
      )}
    </>
  );
};

export default AddDress;
