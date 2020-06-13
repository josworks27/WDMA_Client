import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { LOAD_USER_REQUEST } from '../../store/modules/user/user';
import {
  StyledMain,
  Container,
  Section,
  H1,
  ButtonTitle,
} from '../../lib/extends';

const ProfileWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  transition: ease 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 170px;
  }
`;

const Profile = () => {
  let token = Cookies.get('token');

  const { me, load, loadUserError } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_USER_REQUEST });
  }, [dispatch]);

  useEffect(() => {
    if (loadUserError) {
      alert(loadUserError);
    }
  }, [loadUserError]);

  if (!token) return <Redirect to="/signin" />;
  return (
    <StyledMain>
      <Container>
        <Section>
          <H1>
            Please <span>choose</span> your purpose
          </H1>
        </Section>
        <Section>
          <ProfileWrapper
            to={{
              pathname: '/profile/account',
              state: {
                me,
              },
            }}
          >
            <img src="/images/account.jpg" alt="" />
            <ButtonTitle>My Account</ButtonTitle>
          </ProfileWrapper>
          <ProfileWrapper
            to={{
              pathname: '/profile/history',
              state: {
                load,
              },
            }}
          >
            <img src="/images/history.jpg" alt="" />
            <ButtonTitle>My History</ButtonTitle>
          </ProfileWrapper>
          <ProfileWrapper to="/profile/change">
            <img src="/images/password.jpeg" alt="" />
            <ButtonTitle>Change Password</ButtonTitle>
          </ProfileWrapper>
        </Section>
      </Container>
    </StyledMain>
  );
};

export default Profile;
