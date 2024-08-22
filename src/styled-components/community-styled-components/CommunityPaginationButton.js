import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityPaginationButton = styled.button`
  border: none;
  background-color: #444;
  color: #fff;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &.active {
    background-color: #007bff;
  }

  &:hover {
    background-color: #555;
  }
`;
