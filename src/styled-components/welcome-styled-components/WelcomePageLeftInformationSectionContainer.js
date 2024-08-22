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


export const WelcomePageLeftInformationSectionContainer = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: 225px;
  width: 50%; 
  max-width: 600px;
  padding: 0 20px;
  text-align: left;

  @media (max-width: 1500px) {
    left: auto;
    right: auto;
    width: 90%;
    top: ${props => props.top - 700}px; 
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    left: auto;
    right: auto;
  }
`;
