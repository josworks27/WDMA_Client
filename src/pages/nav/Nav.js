import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/dress">All Dresses</Link>
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
          <Link to="/dress/stats">Statistic</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
