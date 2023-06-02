import React from 'react';
import MenuBar from './MenuBar';
import Title from './Title';
import Search from './Search';
import Offer from './Offer';
import Products from './Products';
import HomeFooter from './HomeFooter';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const HomeScreen = () => {
  return (
    <Wrapper className='home'>
      <MenuBar />
      <Title />
      <Search />
      <Offer />
      <Products />
      <HomeFooter />
    </Wrapper>
  );
};

export default HomeScreen;
