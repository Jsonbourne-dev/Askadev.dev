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

export const WelcomePageRightInformationSectionContainer = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  right: 225px;
  width: 50%;
  max-width: 600px; 
  padding: 0 20px;
  text-align: left;

  @media (max-width: 1500px) {
    right: auto;
    left: auto;
    width: 90%;
    top: ${props => props.top - 600}px; 
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    right: auto;
    left: auto;
  }
`;