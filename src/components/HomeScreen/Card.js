import React from 'react';
import styled from 'styled-components';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const CardWrapper = styled.div`
  width: 155px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 21px;
`;

const StyledImage = styled.img`
  border-radius: 16px;
  margin-bottom: 8px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const SubTitle = styled.span`
  color: #666666;
  font-size: 11px;
`;

const Card = ({ item }) => {
  return (
    <CardWrapper>
      <StyledImage src={item.svg} alt={item.name} />
      <Text>{item.name}</Text>
      <SubTitle>{item.title}</SubTitle>
      <Text style={{ display: 'flex', alignItems: 'center' }}>
        <AttachMoneyIcon />
        {item.amount}
      </Text>
    </CardWrapper>
  );
};

export default Card;
