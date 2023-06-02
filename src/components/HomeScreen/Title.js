import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  margin-top: 20px;
  padding-left: 20px;
`;

const Bold = styled.span`
  font-size: 25px;
  font-weight: 700;
`;
const SubTitle = styled.div`
  color: #666666;
  font-weight: 600;
`;

const Title = () => {
  return (
    <TitleWrapper>
      <Bold>Welcome,</Bold>
      <SubTitle>Our Fashions App</SubTitle>
    </TitleWrapper>
  );
};

export default Title;
