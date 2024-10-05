import React from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import AsciiArtComponent from '../components/AsciiArt.jsx';
import InfoBoxes from '../components/InfoBoxes.jsx';
import { Theme, Container, Text, Button } from '../styled-components';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
import MallingList from '../components/MallingList.jsx';
import AboutUs from '../components/AboutUs.jsx';

const ButtonGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  max-width: 900px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 4px solid #00BFFF;
  border-radius: 8px;
  margin: 20px auto;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const FunContainer = styled(Container)`
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
  border-radius: 8px;
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column; 
  text-align: center; 
  margin: 20px auto;
  width: 90%; 
  max-width: 900px; 
`;

const AsciiContainer = styled.div`
  width: 100vw; 
  height: 400px;
  padding: 40px; 
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  border-radius: 8px;
  margin: 0; 
  position: relative; 

  @media (max-width: 600px) {
    height: 300px; 
    padding: 20px;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    height: 100px; 
  }
`;


const Spacer = styled.div`
  height: 40px; 
  width: 100%; 
`;

const Welcome = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: '0' }}>
          <AppBar width="100%" />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Container
            width="100%"
            padding="40px 20px"
            background="linear-gradient(135deg, #0d0d0d, #1a1a1a)" // Gradient background
            color="#FFFFFF"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            hasBorder={false}
            style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '0', paddingRight: '0' }}
          >
            <Text
              variant="body"
              fontSize="2.5rem"
              textAlign="left"
              margin="0"
              padding="10px 0"
              lineHeight="1.5rem"
              style={{ color: '#FF4500' }} // Soft Red-Orange
            >
              <span style={{ color: '#FF4500' }}>A</span>
              <span style={{ color: '#00BFFF' }}>ska</span>
              <span style={{ color: '#FFFF00' }}>DEV</span>
            </Text>
            <Text
              variant="body"
              fontSize="1.5rem"
              color="#00FA9A" // Mint Green
              textAlign="left"
              margin="0"
              padding="10px 0"
              lineHeight="1.5rem"
            >
              We are dedicated to assisting you with all your coding inquiries and projects.
            </Text>
          </Container>

          <AsciiContainer>
            <AsciiArtComponent />
          </AsciiContainer>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text
            variant="title"
            fontSize="2rem"
            color="#FFD700" // Gold color
            textAlign="center"
            margin="20px 0"
            padding="0"
            lineHeight="1.5rem"
          >
            Quick Access Commands
          </Text>

          <ButtonGrid>
            <Button>Help Develop</Button>
            <Button>GitHub</Button>
            <Button>Instant Help</Button>
            <Button>Community</Button>
            <Button>Profile</Button>
            <Button>Search Question</Button>
            <Button>Terminal Setup</Button> {/* New Button Added */}
          </ButtonGrid>
          <Spacer />
          <Spacer />
          <FunContainer hasBorder={false}>
            <Text
              variant="title"
              fontSize="2rem"
              color="#FFD700" // Gold color
              textAlign="center"
              margin="0"
              padding="10px 0"
            >
              More Info About Us
            </Text>
            <Text
              variant="body"
              fontSize="1.2rem"
              color="#00FA9A" // Mint Green
              textAlign="center"
              margin="0"
              padding="10px 0"
            >
              We are passionate about fostering a welcoming community for all.
            </Text>
          </FunContainer>
          <AboutUs />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text
            variant="title"
            fontSize="2rem"
            color="#FFD700" // Gold color
            textAlign="center"
            margin="0"
            padding="10px 0"
          >
            Additional Resources
          </Text>
          <Text
            variant="body"
            fontSize="1.2rem"
            color="#00FA9A" // Mint Green
            textAlign="center"
            margin="0"
            padding="10px 0"
          >
            Discover more exciting content and expand your knowledge.
          </Text>

          <InfoBoxes />

          <Spacer />
          <Spacer />

          <MallingList />

          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Footer />
        </div>
      </Theme>
    </>
  );
};

export default Welcome;
