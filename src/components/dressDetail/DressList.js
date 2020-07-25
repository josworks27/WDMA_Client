import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALL_DRESS_REQUEST } from '../../store/modules/dress/dress';
import {
  DressListMain,
  DressListContainer,
  DressListLink,
} from './dressDetatilStyles';

const DressList = ({ match }) => {
  const { dresses, findDressesError } = useSelector(
    (state) => state.dressReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ALL_DRESS_REQUEST });
  }, [dispatch]);

  useEffect(() => {
    if (findDressesError) {
      alert(findDressesError);
    }
  }, [findDressesError]);

  return (
    <DressListMain>
      <DressListContainer>
        <ul>
          {dresses.map((item) => {
            return (
              <li key={item.id}>
                <DressListLink to={`${match.path}/${item.id}`}>
                  {item['images.filePath'] ? (
                    <img
                      src={item['images.filePath']}
                      alt="dress-list"
                      loading="lazy"
                    />
                  ) : (
                    <img src="/images/bg.jpeg" alt="dress-list" />
                  )}
                  <div>{item.model}</div>
                </DressListLink>
              </li>
            );
          })}
        </ul>
      </DressListContainer>
    </DressListMain>
  );
};

export default DressList;
