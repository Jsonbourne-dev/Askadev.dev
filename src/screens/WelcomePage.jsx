import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import Footer from '../components/Footer.jsx';
import QuestionPipe from '../components/QuestionPipe.jsx';
import UserPip from '../components/UserPipe.jsx';
import InformationSection from '../components/InformationSection.jsx';
import Statistics from '../components/Statistics.jsx';
import TitleSection from '../components/TitleSection.jsx';

const GlobalStyles = createGlobalStyle`
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

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 400px;
`;


const ComponentContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;

  @media (max-width: 1500px) {
    width: 90%;
    left: 5%;
    right: 5%;
  }
`;

const QuestionPipeContainer = styled(ComponentContainer)`
  top: 800px;
  @media (max-width: 1500px) {
    top: 400px;
  }
`;

const StatisticsContainer = styled(ComponentContainer)`
  top: 1400px;
  @media (max-width: 1500px) {
    top: 800px;
  }
`;

const UserPipContainer = styled(ComponentContainer)`
  top: 2200px;

  @media (max-width: 1500px) {
    top: 1700px;
  }
`;


const LeftInformationSectionContainer = styled.div`
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

const RightInformationSectionContainer = styled.div`
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


const FooterContainer = styled.div`
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

const StyledFooter = styled(Footer)`
  width: 100%;
`;

const WelcomePage = () => {
  const stats = [
    { number: '1,534', text: 'Questions Asked' },
    { number: '5,678', text: 'Answers Provided' },
    { number: '562', text: 'Active Users' }
  ];

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <PageContainer>
        <AppBar style={{ width: '100%' }} />
        <Content>
          <TitleSection />

          <QuestionPipeContainer>
            <QuestionPipe />
          </QuestionPipeContainer>

          <StatisticsContainer>
            <Statistics stats={stats} />
          </StatisticsContainer>

          <UserPipContainer>
            <UserPip />
          </UserPipContainer>

          <LeftInformationSectionContainer top={2600}>
            <InformationSection
              title="We use WEB5 DIDs"
              text="At Askadev, we leverage WEB5 Decentralized Identifiers (DIDs) to ensure a secure and user-centric experience. WEB5 DIDs provide an advanced method for decentralized identity management, enhancing privacy and control for our users."
            />
          </LeftInformationSectionContainer>

          <RightInformationSectionContainer top={2700}>
            <InformationSection
              title="How We Use Nostr"
              text="Nostr is integral to our platform for enabling Zaps and secure communication. By utilizing Nostr, Askadev ensures a robust and decentralized way to interact with and support our community, making every user’s experience seamless and reliable."
            />
          </RightInformationSectionContainer>
        </Content>
        <FooterContainer>
          <StyledFooter />
        </FooterContainer>
      </PageContainer>
    </>
  );
};

export default WelcomePage;
