import React from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import AsciiArtComponent from '../components/AsciiArt.jsx'; 
import InfoBoxes from '../components/InfoBoxes.jsx';
import { Theme, Container, Text, Button } from '../styled-components';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';

const ButtonGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  max-width: 900px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 4px solid #FFFF00;
  border-radius: 8px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const FunContainer = styled(Container)`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column; 
  text-align: center;
  margin: 20px auto;
  width: 100%; 
  max-width: 900px; 
`;

const Spacer = styled.div`
  height: 40px; 
  width: 100%; 
  border: none; 
`;

const Welcome = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ width: '100%', paddingBottom: '20px', position: 'relative', zIndex: 10 }}>
            <AppBar width="100%" />
          </div>

          <Container
            width="100%"
            padding="20px"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            color="#FFFFFF"
            display="flex"
            justifyContent="center"
            alignItems="center"
            hasBorder={false}
            style={{ position: 'relative' }}
          >
            <Container
              maxWidth="800px"
              width="100%"
              padding="20px"
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              textAlign="left"
              hasBorder={false}
            >
              <div>
              <Text
                variant="body"
                fontSize="2rem"
                color="#00d9ff"
                textAlign="left"
                margin="0"
                padding="10px 0 0 0"
                lineHeight="1.8rem"
              >
                Welcome to AskaDEV! 🚀
              </Text>
                <Text
                  variant="body"
                  fontSize="1.2rem"
                  color="#FFFF00"
                  textAlign="left"
                  margin="0"
                  padding="10px 0 0 0"
                  lineHeight="1.8rem"
                >
                  We are here to help you with all your coding needs!💻✨
                </Text>
              </div>
            </Container>
            <div className="ascii-border"></div>
          </Container>

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
            <div style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '8px', margin: '20px auto' }}>
              <AsciiArtComponent />
            </div>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <Text
                variant="title"
                fontSize="1.5rem"
                color="#FFFF00"
                textAlign="center"
                margin="0"
                padding="0"
                lineHeight="2rem"
              >
                Quick Access Commands 💡
              </Text>
            </div>

            <ButtonGrid>
              <Button>Help Develop</Button>
              <Button>GitHub</Button>
              <Button>Instant Help</Button>
              <Button>Community</Button>
              <Button>Profile</Button>
              <Button>Search Question</Button>
            </ButtonGrid>

            <FunContainer hasBorder={false}>
              <Text
                variant="title"
                fontSize="2rem"
                color="#FFFF00"
                textAlign="center"
                margin="0"
                padding="10px 0"
              >
                More Info About Us! 🎉🤝
              </Text>
              <Text
                variant="body"
                fontSize="1.2rem"
                color="#00FFFF"
                textAlign="center"
                margin="0"
                padding="10px 0"
              >
                We love helping people and creating a welcoming community! 🌍✨
              </Text>
            </FunContainer>

            <Spacer /> 

            <InfoBoxes />
          </Container>

          <Footer style={{ marginTop: 'auto' }} />
        </div>
      </Theme>

      <style>{`
        .ascii-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          font-family: 'Courier New', Courier, monospace;
          color: #00FFFF; 
          white-space: pre;
          text-align: center;
          line-height: 1;
          z-index: 1;
          font-size: 10px; 
        }

        .ascii-border::before {
          content: "${'░'.repeat(150)}"; 
          display: block;
        }
      `}</style>
    </>
  );
};

export default Welcome;
