import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const Nav = () => {
  let token = Cookies.get('token');
  const { me } = useSelector((state) => state.userReducer);

  const handleClick = () => {
    Cookies.remove('token');
    window.location.reload();
  };

  return (
    <>
      {token || me ? (
        <div className="container">
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/dress">Dress list</Link>
            </li>
            <li>
              <Link to="/dress/add">Add dress</Link>
            </li>
            <li>
              <Link to="/dress/search">Search</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/dress/stats">Stats</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/" onClick={handleClick}>
                SignOut
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="container">
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/dress">Dress list</Link>
            </li>
            <li>
              <Link to="/dress/add">Add dress</Link>
            </li>
            <li>
              <Link to="/dress/search">Search</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/dress/stats">Stats</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
