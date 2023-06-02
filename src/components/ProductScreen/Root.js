import React from 'react';
import ProductImage from './ProductImage';
import styled from 'styled-components';
import ProductDetails from './ProductDetails';
import HomeFooter from '../HomeScreen/HomeFooter';
const Wrapper = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const Root = () => {
  return (
    <Wrapper className='product'>
      <ProductImage />
      <ProductDetails />
      <HomeFooter />
    </Wrapper>
  );
};

export default Root;
