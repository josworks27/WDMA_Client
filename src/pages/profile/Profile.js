import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Link to="/profile/info" />
      <Link to="/profile/history" />
      <Link to="/profile/change" />
    </>
  );
};

export default Profile;
