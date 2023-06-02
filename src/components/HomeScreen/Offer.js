import React from 'react';
import styled from 'styled-components';
import OfferImg from '../../assets/offer.svg';
import Offer2 from '../../assets/offer2.svg';

const OfferWrapper = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  overflow: hidden;
`;

const StyledImage = styled.img`
  margin-right: 12px;
`;

const Offer = () => {
  return (
    <OfferWrapper>
      <StyledImage src={OfferImg} alt='offer' />
      <StyledImage src={Offer2} alt='offer' />
    </OfferWrapper>
  );
};

export default Offer;
