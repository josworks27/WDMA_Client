import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import AddDressInput from '../../components/addDress/AddDressInput';

const AddDress = ({ history }) => {
  let token = Cookies.get('token');

  if (!token) return <Redirect to="/signin" />;
  return (
    <main>
      <AddDressInput history={history} />
    </main>
  );
};

export default AddDress;
