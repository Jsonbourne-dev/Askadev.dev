import React from 'react';
import { Helmet } from 'react-helmet';
import { Theme, Container, Text, Button } from '../styled-components'; 
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faShieldAlt, faUsers, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

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
     
            <InfoContainer>
              <Text variant="title" fontSize="1rem" color="#FFFF00">
                AskaDEV
              </Text>
              <Text noFont={true} variant="subtitle" fontSize="1.2rem" color="#00FFFF" sharp={true} style={{ marginTop: '10px', marginBottom: '15px' }}>
                We’re dedicated to helping developers find solutions to their challenges. Join us!
              </Text>
              <ButtonRow>
                <Button>Get help!</Button>
                <Icon icon={faHandsHelping} color="#00FFFF" /> 
              </ButtonRow>
            </InfoContainer>

            <InfoContainer>
              <Text variant="title" fontSize="1rem" color="#FFFF00">
                Community
              </Text>
              <Text noFont={true} variant="subtitle" fontSize="1.2rem" color="#00FFFF" sharp={true} style={{ marginTop: '10px', marginBottom: '15px' }}>
                A vibrant community awaits you! Connect, share, and learn together.
              </Text>
              <ButtonRow>
                <Button>Community🚀</Button>
                <Icon icon={faUsers} color="#00FFFF" />
              </ButtonRow>
            </InfoContainer>

            <InfoContainer>
              <Text variant="title" fontSize="1rem" color="#FFFF00">
                Open Source
              </Text>
              <Text noFont={true} variant="subtitle" fontSize="1.2rem" color="#00FFFF" sharp={true} style={{ marginTop: '10px', marginBottom: '15px' }}>
                Collaborate on exciting projects and contribute to the open-source movement!
              </Text>
              <ButtonRow>
                <Button>Learn More</Button>
                <Icon icon={faCodeBranch} color="#00FFFF" />
              </ButtonRow>
            </InfoContainer>

            <InfoContainer>
              <Text variant="title" fontSize="1rem" color="#FFFF00">
                Web5
              </Text>
              <Text noFont={true} variant="subtitle" fontSize="1.2rem" color="#00FFFF" sharp={true} style={{ marginTop: '10px', marginBottom: '15px' }}>
                Discover the future of the web with enhanced security and privacy.
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
