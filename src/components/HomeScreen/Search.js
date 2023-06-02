import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../../assets/filtter.svg';

const SearchBarWrapper = styled.div`
  margin-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding-left: 44px;
  height: 46px;
  background: #f3f4f5;
  border-radius: 30px;
  width: 230px;
  border: none;
  outline: none;
  color: #aaaaaa;
  padding-left: -28px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
`;

const Search = () => {
  return (
    <SearchBarWrapper>
      <SearchInputWrapper>
        <StyledSearchIcon style={{ paddingLeft: '16px' }} />
        <StyledInput type='text' placeholder='Search...' />
      </SearchInputWrapper>
      <img src={Filter} alt='filter' />
    </SearchBarWrapper>
  );
};

export default Search;
