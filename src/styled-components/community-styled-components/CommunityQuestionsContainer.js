import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityQuestionsContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  max-width: 1200px; 
  padding-bottom: 60px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1; 
`;