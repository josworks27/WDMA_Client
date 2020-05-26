import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { GET_DRESS_REQUEST } from '../../store/modules/dress/dress';

import DressDetailInfo from './DressDetailInfo';
import DressDetailEvent from './DressDetailEvent';

const DressDetail = ({ match }) => {
  let token = Cookies.get('token');
  const { id } = match.params;
  const { dress, images, events } = useSelector((state) => state.dressReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DRESS_REQUEST,
      data: {
        dressId: id,
      },
    });
  }, [dispatch, id]);

  return (
    <>
      {!token ? (
        <Redirect to="/signin" />
      ) : (
        <>
          <div>
            <h2>{`No.${match.params.id} dress's Detail`}</h2>
            <DressDetailInfo dress={dress} images={images} />
            <DressDetailEvent events={events} />
          </div>
          <div>
            <button type="button">Create event</button>
          </div>
          <div>
            <button type="button">Edit dress</button>
          </div>
        </>
      )}
    </>
  );
};

export default DressDetail;

// match.params로 드레스 아이디 찾아서 해당 드레스의 정보 렌더링

// 1. 드레스 정보 컴포넌트
// 2. 드레스 이벤트 이력 컴포넌트
// 3. 캘린더 컴포넌트
