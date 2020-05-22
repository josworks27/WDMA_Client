import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupInput from '../components/signup/SignupInput';

const Signup = ({ history }) => {
  const { checked } = useSelector((state) => state.userReducer);

  return (
    <>{checked ? <SignupInput history={history} /> : <Redirect to="/" />}</>
  );
};

export default Signup;
