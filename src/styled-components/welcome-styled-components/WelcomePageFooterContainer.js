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


export const WelcomePageFooterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 3500px;

  @media (max-width: 1500px) {
    position: absolute;
    width: 100%;
    height: 100px;
    top: 2500px;
  }
`;