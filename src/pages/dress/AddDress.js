import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import AddDressInput from '../../components/addDress/AddDressInput';
import { StyledMain } from '../../lib/extends';

const AddDress = ({ history }) => {
  let token = Cookies.get('token');

  if (!token) return <Redirect to="/signin" />;
  return (
    <StyledMain>
      <AddDressInput history={history} />
    </StyledMain>
  );
};

export default AddDress;
