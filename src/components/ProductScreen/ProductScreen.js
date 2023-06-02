import React from 'react';
import styled from 'styled-components';
import Root from './Root';

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  width: 375px;
  height: 98vh;
  border: 1px solid #f3f4f5;
  margin-top: 4px;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const ProductScreen = () => {
  return (
    <ScreenWrapper className='home'>
      <Root />
    </ScreenWrapper>
  );
};

export default ProductScreen;
