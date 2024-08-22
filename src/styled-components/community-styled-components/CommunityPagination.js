import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityPagination = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 0;
  box-sizing: border-box;
`;
