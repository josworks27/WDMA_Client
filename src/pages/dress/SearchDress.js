import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import SearchDressInput from '../../components/search/SearchDressInput';
import sampleImg from '../../asset/sample.jpg';

const SearchMain = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResult = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 125px);
`;

const SearchDress = () => {
  let token = Cookies.get('token');

  const { searchResult, searchDreseError } = useSelector(
    (state) => state.dressReducer,
  );

  if (!token) return <Redirect to="/signin" />;

  return (
    <SearchMain>
      <SearchDressInput />
      {searchResult.length ? (
        <SearchResult>
          <ul>
            {searchResult.map((dress) => {
              return (
                <li key={dress.id}>
                  <Link to={`/dress/${dress.id}`}>
                    {dress['images.filePath'] ? (
                      <img src={dress['images.filePath']} alt="img" />
                    ) : (
                      <img src={sampleImg} alt="img" />
                    )}
                    <div>{dress.model}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SearchResult>
      ) : null}
      {searchDreseError ? <div className="search-fail">No Result</div> : null}
    </SearchMain>
  );
};

export default SearchDress;
