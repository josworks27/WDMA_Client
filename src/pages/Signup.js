import React from 'react';

import ValidationAuth from '../components/signup/ValidationAuth';

const Signup = ({ history }) => {
  return (
    <>
      <ValidationAuth history={history} />
    </>
  );
};

export default Signup;
