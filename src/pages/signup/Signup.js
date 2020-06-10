import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupInput from '../../components/signup/SignupInput';

const Signup = ({ history }) => {
  const { checked } = useSelector((state) => state.userReducer);

  if (!checked) return <Redirect to="/" />;
  return (
    <main>
      <SignupInput history={history} />
    </main>
  );
};

export default Signup;
