import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchDressModal from '../../components/search/SearchDressModal';

import sampleImg from '../../asset/sample.jpg';
import { DRESS_RESET } from '../../store/modules/dress/dress';

const SearchDress = ({ history }) => {
  let token = Cookies.get('token');

  const [showSearchModal, setShowSearchModal] = useState(false);
  const { searchResult, searchDreseError } = useSelector(
    (state) => state.dressReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchDreseError) {
      // 에러 시 경고
      alert(searchDreseError);

      // state 초기화
      dispatch({ type: DRESS_RESET });

      // dress list로 이동
      history.push('/dress');
    }
  }, [searchDreseError]);

  const handleClick = (event) => {
    event.preventDefault();
    setShowSearchModal(true);
  };

  if (!token) return <Redirect to="/signin" />;

  return (
    <>
      {searchResult.length ? (
        <>
          <h1>Search Result</h1>
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
          <button type="button" onClick={handleClick}>
            Search Again
          </button>
          {showSearchModal ? (
            <SearchDressModal
              history={history}
              setShowSearchModal={setShowSearchModal}
            />
          ) : null}
        </>
      ) : (
        <>
          <h1>Search Dress</h1>
          <SearchDressModal
            history={history}
            setShowSearchModal={setShowSearchModal}
          />
        </>
      )}
    </>
  );
};

export default SearchDress;
