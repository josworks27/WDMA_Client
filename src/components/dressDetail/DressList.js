import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ALL_DRESS_REQUEST } from '../../store/modules/dress/dress';

import sampleImg from '../../asset/sample.jpg';
import './DressList.css';

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
    <div className="dress-list">
      <ul>
        {dresses.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`${match.path}/${item.id}`}>
                {item['images.filePath'] ? (
                  <img src={item['images.filePath']} alt="img" />
                ) : (
                  <img src={sampleImg} alt="img" />
                )}
                <div>{item.model}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DressList;
