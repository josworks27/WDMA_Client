import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STORE_LIST_REQUEST } from '../../store/modules/user/user';

const StoreList = ({ onChange, belongStore }) => {
  const { store } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  // 스토어 리스트 요청
  useEffect(() => {
    dispatch({
      type: STORE_LIST_REQUEST,
    });
  }, [dispatch]);

  return (
    <>
      <select name="store" value={belongStore} onChange={onChange}>
        {store.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default StoreList;
