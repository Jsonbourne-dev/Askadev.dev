import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 15px;
  border: 2px solid #FFFF00;
  padding: 5px;
  width: 50%;
  max-width: 600px;
  box-sizing: border-box;
  margin: auto;
  position: relative;
  z-index: 1000;
  transition: width 0.3s ease;

  @media (max-width: 1000px) {
    display: ${props => (props.showSearch ? 'flex' : 'none')};
    width: 80%;
    max-width: 500px;
  }

  @media (min-width: 1001px) {
    display: flex;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 35px;
  border: none;
  background-color: black;
  color: #00FFFF;
  font-size: 18px;
  outline: none;
  font-family: 'Press Start 2P', cursive;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: #FFFF00;
  }

  &:focus {
    border-bottom-color: #e1b91e;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: #00FFFF;
  font-size: 24px;
  margin-right: 10px;
`;

const SearchBar = ({ showSearch, searchQuery, handleSearchChange, searchBarRef }) => (
  <SearchBarContainer showSearch={showSearch} ref={searchBarRef}>
    <SearchIcon icon={faSearch} />
    <SearchInput
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </SearchBarContainer>
);

export default SearchBar;
