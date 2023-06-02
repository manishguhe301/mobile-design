import React from 'react';
import Product3 from '../../assets/product3.svg';
import styled from 'styled-components';
import Cart2 from '../../assets/cart2.svg';
import Arrow from '../../assets/arrow.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
  position: absolute;
  top: 8px;
  width: 325px;
`;

const ProductImage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={Product3} alt='product' />
      <IconsWrapper>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={Arrow} alt='arr' />
        </div>
        <div>
          <img src={Cart2} alt='cart' />
        </div>
      </IconsWrapper>
    </Container>
  );
};

export default ProductImage;
