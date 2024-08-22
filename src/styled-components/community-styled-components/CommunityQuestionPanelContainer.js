import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityQuestionPanelContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 60px;
  padding-top: 100px;
`;
