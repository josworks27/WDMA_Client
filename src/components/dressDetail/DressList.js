import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ALL_DRESS_REQUEST } from '../../store/modules/dress/dress';

const DressListMain = styled.main`
  height: 100vh;
  width: 100%;
`;

const DressListContainer = styled.div`
  width: 100%;
  padding: 20px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-auto-rows: 220px;
    column-gap: 30px;
    row-gap: 10px;
    justify-content: center;
  }
`;

const DressListLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    img {
      filter: opacity(25%);
    }
    div {
      color: ${(props) => props.theme.subColor};
    }
  }
  img {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 180px;
    margin-bottom: 10px;
  }
  div {
    height: 30px;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1.2rem;
  }
`;

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
