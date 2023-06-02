import React from 'react';
import styled from 'styled-components';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  width: 375px;
  height: 98vh;
  border: 1px solid #f3f4f5;
  margin-top: 4px;
`;

const MobileScreen = () => {
  return (
    <ScreenWrapper className='screenWrapper'>
      <HomeScreen />
      <ProductScreen />
    </ScreenWrapper>
  );
};

export default MobileScreen;
