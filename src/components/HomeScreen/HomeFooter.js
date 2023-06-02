import React from 'react';
import styled from 'styled-components';
import Home from '../../assets/home.svg';
import Cart from '../../assets/cart.svg';
import Notification from '../../assets/notification.svg';
import Profile from '../../assets/profile.svg';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

const Footer = styled.div`
  margin-top: 12px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px -2px 7px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 76px;
  background-color: #eeeeee;
  border-radius: 30px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  height: 20px;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 12px;
  margin-left: 4px;
  margin-right: 4px;
`;

const HomeFooter = () => {
  const navigate = useNavigate();
  return (
    <Footer>
      <Tooltip title='Click Here For Home Page'>
        <HomeWrapper onClick={() => navigate('/')}>
          <img src={Home} alt='home' />
          <StyledSpan>Home</StyledSpan>
        </HomeWrapper>
      </Tooltip>
      <Tooltip title='Click Here For Product Page'>
        <StyledImage
          src={Cart}
          alt='cart'
          onClick={() => navigate('/product')}
        />
      </Tooltip>
      <StyledImage src={Notification} alt='not' />
      <StyledImage src={Profile} alt='user' />
    </Footer>
  );
};

export default HomeFooter;
