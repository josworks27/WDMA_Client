import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import SearchDressInput from '../../components/search/SearchDressInput';

const SearchMain = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResult = styled.div`
  ul {
    li {
      h1 {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
      a {
        text-decoration: none;
        &:hover {
          img {
            opacity: 0.5;
          }
          div {
            color: ${(props) => props.theme.subColor};
          }
        }
      }
      img {
        width: auto;
        height: auto;
        max-width: 300px;
        max-height: 300px;
        margin-bottom: 10px;
      }
      div {
        color: white;
        text-align: center;
        font-size: 1.5rem;
      }
    }
  }
`;

const SearchFail = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
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
                  <h1>Search Result</h1>
                  <Link to={`/dress/${dress.id}`}>
                    {dress['images.filePath'] ? (
                      <img src={dress['images.filePath']} alt="img" />
                    ) : (
                      <img src="/images/bg.jpeg" alt="search-dress" />
                    )}
                    <div>{dress.model}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SearchResult>
      ) : null}
      {searchDreseError ? <SearchFail>No Result</SearchFail> : null}
    </SearchMain>
  );
};

export default SearchDress;
