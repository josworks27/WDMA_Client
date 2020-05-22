import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useOnlyNumber = (email) => {
  const [authNumber, SetAuthNumber] = useState('');
  const { checked } = useSelector((state) => state.userReducer);

  const handleChange = (event) => {
    const { value } = event.target;
    const changedValue = Number(value);

    if (!Number.isNaN(changedValue)) SetAuthNumber(value);
  };

  useEffect(() => {
    // 시간이 지연되면 경고 알림
    setTimeout(() => {
      if (!checked) {
        alert(`Your Email address is ${email}`);
      }
    }, 30000);
  }, [checked, email]);

  return { authNumber, handleChange };
};

export default useOnlyNumber;
