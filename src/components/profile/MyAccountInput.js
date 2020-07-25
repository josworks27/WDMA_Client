import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import StoreList from '../signup/StoreList';
import {
  PUT_USER_REQUEST,
  DELETE_USER_REQUEST,
} from '../../store/modules/user/user';
import { InputForm, H1, Button } from '../../lib/extends';
import {
  MyAccountContainer,
  MyAccountFormGroup,
  ButtonGroup,
} from './profileStyles';

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
  }, [updateUser, putUserError, deleteUser, deleteUserError, history]);

  const handleClick = (event) => {
    const { name } = event.target;

    if (name === 'edit-account') {
      event.preventDefault();
      setToggle(false);
    } else {
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to do this?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              dispatch({ type: DELETE_USER_REQUEST });
            },
          },
          {
            label: 'No',
            onClick: () => {
              console.log('did not confirm');
            },
          },
        ],
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
        <MyAccountContainer height="600px">
          <H1>
            My <span>Personal</span> information
          </H1>
          <InputForm>
            <MyAccountFormGroup>
              <label>Account E-mail</label>
              <input type="text" value={me.email} readOnly />
            </MyAccountFormGroup>
            <MyAccountFormGroup>
              <label>Name</label>
              <input type="text" value={me.name} readOnly />
            </MyAccountFormGroup>
            <MyAccountFormGroup>
              <label>Store Name</label>
              <input type="text" value={me['store.name']} readOnly />
            </MyAccountFormGroup>
          </InputForm>
          <ButtonGroup>
            <Button type="button" name="edit-account" onClick={handleClick}>
              Edit Account
            </Button>
            <Button type="button" name="resign" onClick={handleClick}>
              Resign membership
            </Button>
          </ButtonGroup>
        </MyAccountContainer>
      ) : (
        <MyAccountContainer height="700px">
          <H1>
            <span>Edit</span> my personal information
          </H1>
          <InputForm onSubmit={handleSubmit}>
            <MyAccountFormGroup>
              <label>Account E-mail (Disable)</label>
              <input type="text" name="email" value={me.email} readOnly />
            </MyAccountFormGroup>
            <MyAccountFormGroup>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editAccount.name}
                onChange={handleChange}
              />
            </MyAccountFormGroup>
            <MyAccountFormGroup>
              <span>
                Select Shop
                <span role="img" aria-label="point">
                  👇
                </span>
              </span>
              <StoreList
                onChange={handleChange}
                belongStore={editAccount.store}
              />
            </MyAccountFormGroup>
            <MyAccountFormGroup>
              <span>Are you manager?</span>
              <input
                name="manager"
                type="checkbox"
                checked={editAccount.manager}
                onChange={handleChange}
              />
            </MyAccountFormGroup>
            <ButtonGroup>
              <Button type="submit">Edit</Button>
            </ButtonGroup>
          </InputForm>
        </MyAccountContainer>
      )}
    </>
  );
};

export default MyAccountInput;
