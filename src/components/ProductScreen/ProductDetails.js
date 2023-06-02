import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Star from '../../assets/star.svg';
import Bag from '../../assets/bag.svg';
import { useNavigate } from 'react-router-dom';

const DetailsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px -2px 7px rgba(0, 0, 0, 0.1);
  border-radius: 36px 36px 0px 0px;
  position: relative;
  z-index: 100;
  margin-top: -32px;
`;

const ProductTitle = styled.div`
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const SubTitle = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #666666;
  margin-top: 8px;
`;

const Available = styled.span`
  font-size: 11px;
  font-weight: 600;
  margin-top: 8px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70px;
  height: 30px;
  background-color: #eeeeee;
  border-radius: 30px;
  font-size: 14px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  padding-top: 4px;
  padding-left: 25px;
`;

const Size = styled.div`
  margin-top: 16px;
  margin-left: 25px;
`;

const StyledSpan = styled.div`
  width: 40px;
  height: 40px;
  background-color: #dddddd;
  margin-right: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SizeText = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding-left: 25px;
  padding-right: 25px;
`;

const DescTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Desc = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #666666;
  margin-top: 12px;
`;

const PaymentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
`;

const StyledButton = styled.button`
  background: black;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const AmountDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [amount, setAmount] = useState(198);
  const navigate = useNavigate();

  useEffect(() => {
    setAmount(quantity * 198);
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  return (
    <DetailsWrapper>
      <ProductTitle>
        <Wrapper>
          <Title>Roller Rabbit</Title>
          <SubTitle>Vado Odelle Dress</SubTitle>
        </Wrapper>
        <Wrapper style={{ alignItems: 'end' }}>
          <QuantityWrapper>
            <RemoveIcon
              sx={{ fontSize: '14px', cursor: 'pointer' }}
              onClick={handleDecrease}
            />
            <span>{quantity}</span>
            <AddIcon
              sx={{ fontSize: '14px', cursor: 'pointer' }}
              onClick={handleIncrease}
            />
          </QuantityWrapper>
          <Available>Available In Stock</Available>
        </Wrapper>
      </ProductTitle>
      <Rating>
        <img src={Star} alt='star' />
        <span style={{ paddingLeft: '8px' }}>(320 Reviews)</span>
      </Rating>
      <Size>
        <SizeText>Size</SizeText>
        <div style={{ display: 'flex', marginTop: '12px' }}>
          {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => {
            return (
              <StyledSpan
                key={index}
                onClick={() => setSelectedSize(size)}
                style={{
                  backgroundColor: selectedSize === size ? 'black' : '#dddddd',
                  color: selectedSize === size ? 'white' : 'black',
                }}
              >
                <span>{size}</span>
              </StyledSpan>
            );
          })}
        </div>
      </Size>
      <Description>
        <DescTitle>Description</DescTitle>
        <Desc>
          Get a little lift from these Sam Edelman sandals featuring ruched
          straps and leather lace-up ties, while a braided jute sole makes a
          fresh statement for summer.
        </Desc>
      </Description>
      <PaymentSection>
        <AmountDiv>
          <span style={{ fontSize: '9px', fontWeight: 400, color: '#AAAAAA' }}>
            Total Price
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            ${amount}.00
          </span>
        </AmountDiv>
        <div>
          <StyledButton onClick={() => navigate('/paynow')}>
            <img src={Bag} alt='bag' style={{ marginRight: '12px' }} />
            Buy Now
          </StyledButton>
        </div>
      </PaymentSection>
    </DetailsWrapper>
  );
};

export default ProductDetails;
