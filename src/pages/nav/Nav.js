import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/dress">Dress</Link>
        </li>
        <li>
          <Link to="/add">Add dress</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
