import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SignupInput = () => {
  const { email } = useSelector((state) => state.userReducer);

  console.log(email);
  return (
    <div>
      <div>SignupInput</div>
    </div>
  );
};

export default SignupInput;
