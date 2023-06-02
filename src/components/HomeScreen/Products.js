import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Product1 from '../../assets/product1.svg';
import Product2 from '../../assets/product2.svg';

const ProductsWrapper = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ViewAll = styled.span`
  font-weight: 600;
  font-size: 11px;
  color: #666666;
`;

const ProductsList = [
  {
    name: 'The Marc Jacobs',
    title: 'Traveler Tote',
    amount: 195,
    svg: Product1,
  },
  {
    name: 'Axel Arigato',
    title: 'Clean 90 Triple Sneakers',
    amount: 245,
    svg: Product2,
  },
];

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
`;

const Products = () => {
  return (
    <>
      <ProductsWrapper>
        <Header>
          <StyledText>New Arrivals</StyledText>
          <ViewAll>View All</ViewAll>
        </Header>
        <ItemWrapper>
          {ProductsList.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </ItemWrapper>
      </ProductsWrapper>
    </>
  );
};

export default Products;
