import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import StoreList from '../signup/StoreList';
import {
  PUT_USER_REQUEST,
  DELETE_USER_REQUEST,
} from '../../store/modules/user/user';

const MyAccountInput = ({ me, history }) => {
  const [toggle, setToggle] = useState(true);
  const [editAccount, setEditAccount] = useState({
    name: '',
    store: 'Yokohama',
    manager: false,
  });

  const { updateUser, putUserError, deleteUser, deleteUserError } = useSelector(
    (state) => state.userReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setEditAccount({
      name: me.name,
      store: 'Yokohama',
      manager: false,
    });
  }, [me]);

  useEffect(() => {
    if (updateUser) {
      history.push('/profile');
    }

    if (deleteUser) {
      Cookies.remove('token');
      history.push('/');
      window.location.reload();
    }

    if (putUserError) {
      alert(putUserError);
    }

    if (deleteUserError) {
      alert(deleteUserError);
    }
  }, [updateUser, putUserError, deleteUser, history]);

  const handleClick = (event) => {
    const { name } = event.target;

    if (name === 'edit-account') {
      event.preventDefault();
      setToggle(false);
    } else {
      dispatch({ type: DELETE_USER_REQUEST });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // ! 디스패치 하기
    dispatch({
      type: PUT_USER_REQUEST,
      data: {
        name: editAccount.name,
        store: editAccount.store,
        manager: editAccount.manager,
      },
    });
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.name === 'manager' ? target.checked : target.value;

    setEditAccount({
      ...editAccount,
      [name]: value,
    });
  };

  return (
    <>
      {toggle ? (
        <>
          <div>
            <h2>My Account</h2>
            <div>Account E-mail</div>
            <input type="text" value={me.email} readOnly />
            <br />
            <div>Name</div>
            <input type="text" value={me.name} readOnly />
            <br />
            <div>Store Name</div>
            <input type="text" value={me['store.name']} readOnly />
          </div>
          <div>
            <button type="button" name="edit-account" onClick={handleClick}>
              Edit Account
            </button>
            <br />
            <div>
              <button type="button" name="resign" onClick={handleClick}>
                Resign membership
              </button>
            </div>
            <button type="button">
              <Link to="/profile">Back</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>My Account</h2>
          <form onSubmit={handleSubmit}>
            <div>Account E-mail</div>
            <input type="text" name="email" value={me.email} readOnly />
            <br />
            <div>Name</div>
            <input
              type="text"
              name="name"
              value={editAccount.name}
              onChange={handleChange}
            />
            <br />
            <div>Store Name</div>
            <StoreList
              onChange={handleChange}
              belongStore={editAccount.store}
            />
            <br />
            <div>Manager</div>
            <input
              name="manager"
              type="checkbox"
              checked={editAccount.manager}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Edit</button>
          </form>
          <div>
            <button type="button">
              <Link to="/profile">Back</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MyAccountInput;
