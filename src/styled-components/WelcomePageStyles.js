import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer.jsx';

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

export const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const WelcomePageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 400px;
`;

export const WelcomePageQuestionPipeContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 800px;

  @media (max-width: 1500px) {
    width: 90%;
    left: 5%;
    right: 5%;
    top: 400px;
  }
`;

export const WelcomePageStatisticsContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 1400px;

  @media (max-width: 1500px) {
    width: 90%;
    left: 5%;
    right: 5%;
    top: 800px;
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

export const WelcomePageStyledFooter = styled(Footer)`
  width: 100%;
`;
