import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import SearchDressInput from '../../components/search/SearchDressInput';
import sampleImg from '../../asset/sample.jpg';

const SearchDress = () => {
  let token = Cookies.get('token');

  const { searchResult, searchDreseError } = useSelector(
    (state) => state.dressReducer,
  );

  if (!token) return <Redirect to="/signin" />;

  return (
    <main>
      <div className="container">
        <div className="search-form">
          <SearchDressInput />
        </div>
        {searchResult.length ? (
          <div className="search-result">
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
          </div>
        ) : null}
        {searchDreseError ? <div className="search-fail">No Result</div> : null}
      </div>
    </main>
  );
};

export default SearchDress;
