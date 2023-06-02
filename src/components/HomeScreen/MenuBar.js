import React from 'react';
import styled from 'styled-components';
import Menu from '../../assets/menu.svg';
import User from '../../assets/user.svg';

const MenuBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledUser = styled.div`
  height: 50px;
  width: 50px;
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <div>
        <img src={Menu} alt='menu' style={{ marginTop: '6px' }} />
      </div>
      <StyledUser>
        <img src={User} alt='user' />
      </StyledUser>
    </MenuBarWrapper>
  );
};

export default MenuBar;
