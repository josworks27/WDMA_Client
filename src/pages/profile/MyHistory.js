import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import MyHistoryEntry from '../../components/profile/MyHistoryEntry';

const MyHistory = ({ history }) => {
  let token = Cookies.get('token');
  const { load } = history.location.state;

  if (!token) return <Redirect to="/signin" />;
  return (
    <main>
      <MyHistoryEntry data={load} />
    </main>
  );
};

export default MyHistory;
