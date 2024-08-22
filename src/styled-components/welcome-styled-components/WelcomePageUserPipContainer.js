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

export const WelcomePageUserPipContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 2200px;

  @media (max-width: 1500px) {
    width: 90%;
    left: 5%;
    right: 5%;
    top: 1700px;
  }
`;