import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityQuestionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
