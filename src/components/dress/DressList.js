import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DRESS_ALL_REQUEST } from '../../store/modules/dress/dress';

import './DressList.css';

const DressList = ({ match }) => {
  const { dress, findDressError } = useSelector((state) => state.dressReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: DRESS_ALL_REQUEST });
  }, []);

  console.log(match.url);
  console.log('dress ?', dress);
  return (
    <>
      <h2>Dress list</h2>
      <ul>
        {dress.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`${match.url}/${item.id}`}>
                <img src={item['images.filePath']} alt="img" />
                <div>{item.model}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DressList;

// 각 드레스의 디테일로 가게 매치와 링크 컴포넌트 사용

// 서버에서 드레스 리스트 가져오기
// 가져온 리스트 렌더링
