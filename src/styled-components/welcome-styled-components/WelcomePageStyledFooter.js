import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../../components/Footer.jsx';

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

export const WelcomePageStyledFooter = styled(Footer)`
  width: 100%;
`;
