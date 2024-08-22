import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto; 
`;
