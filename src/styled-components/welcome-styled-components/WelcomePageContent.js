import styled, { createGlobalStyle } from 'styled-components';

export const WelcomePageGlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
    background-color: #000000;
    font-family: 'Courier New', Courier, monospace;
    color: rgb(0, 255, 255);
  }
`;

export const WelcomePageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 400px;
`;
