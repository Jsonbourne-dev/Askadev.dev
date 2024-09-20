import React from 'react';
import { Helmet } from 'react-helmet';
import { Theme, Container, Text, Button } from '../styled-components'; 
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faShieldAlt, faUsers, faHandsHelping } from '@fortawesome/free-solid-svg-icons'; // Added helping icon

const InfoContainer = styled(Container)`
  max-width: 300px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.3);
  border: 4px solid #FFFF00; 
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  margin: 20px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    max-width: 90%;
    margin: 10px auto;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-top: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 50px; 
  font-size: 2.5rem; 
  flex-shrink: 0; 
`;

const InfoBoxes = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <Container
          width="100%"
          height="auto"
          maxWidth="1400px"
          backgroundColor="transparent"
          color="transparent"
          margin="0 auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
          hasBorder={false}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '40px' }}>
            {/* AskaDEV Box */}
            <InfoContainer>
              <Text variant="title" fontSize="2rem" color="#FFFF00">
                AskaDEV
              </Text>
              <Text variant="subtitle" fontSize=".8rem" color="#00FFFF" style={{ marginTop: '10px', marginBottom: '15px' }}>
                We love helping people! AskaDEV is here to support developers by providing a platform where you can ask questions and get assistance from the community. Join us in fostering a collaborative environment!
              </Text>
              <ButtonRow>
                <Button>Get help!</Button>
                <Icon icon={faHandsHelping} color="#00FFFF" /> {/* Helping icon */}
              </ButtonRow>
            </InfoContainer>

            {/* Community Box */}
            <InfoContainer>
              <Text variant="title" fontSize="2rem" color="#FFFF00">
                Community
              </Text>
              <Text variant="subtitle" fontSize=".8rem" color="#00FFFF" style={{ marginTop: '10px', marginBottom: '15px' }}>
                Asking a question has never been easier! With a supportive community, you can quickly find answers and connect with fellow developers. Don't hesitate to ask or share your knowledge!
              </Text>
              <ButtonRow>
                <Button>Commuinty🚀</Button>
                <Icon icon={faUsers} color="#00FFFF" />
              </ButtonRow>
            </InfoContainer>

            {/* Open Source Box */}
            <InfoContainer>
              <Text variant="title" fontSize="2rem" color="#FFFF00">
                Open Source
              </Text>
              <Text variant="subtitle" fontSize=".8rem" color="#00FFFF" style={{ marginTop: '10px', marginBottom: '15px' }}>
                We are proudly open source! Our community works together to provide the best solutions for developers across the globe. 🌍 Contribute today and join the fun!
              </Text>
              <ButtonRow>
                <Button>Learn More</Button>
                <Icon icon={faCodeBranch} color="#00FFFF" />
              </ButtonRow>
            </InfoContainer>

            {/* Web5 Box */}
            <InfoContainer>
              <Text variant="title" fontSize="2rem" color="#FFFF00">
                Web5
              </Text>
              <Text variant="subtitle" fontSize=".8rem" color="#00FFFF" style={{ marginTop: '10px', marginBottom: '15px' }}>
                With Web5 and decentralized identity (DID), your data is secure like never before. Experience the future of the web, where privacy is the priority. 🛡️
              </Text>
              <ButtonRow>
                <Button>Learn More🚀</Button>
                <Icon icon={faShieldAlt} color="#00FFFF" />
              </ButtonRow>
            </InfoContainer>
          </div>
        </Container>
      </Theme>
    </>
  );
};

export default InfoBoxes;
