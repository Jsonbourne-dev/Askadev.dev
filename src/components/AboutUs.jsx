import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../styled-components';

// Import profile pictures
import duncanPfp from '../assets/PFP/duncanpfp.jpeg';
import jsonPfp from '../assets/PFP/jsonpfp.jpeg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 300px;
  border: 4px solid #FFFF00;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1000px) {
    margin: 15px 0;
  }
`;

const ImagePlaceholder = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #FFFF00;
  margin-bottom: 20px; /* Increased margin for spacing */
  transition: transform 0.3s ease;

  ${Box}:hover & {
    transform: scale(1.1);
  }
`;

const Text = styled.h2`
  color: #FFFF00;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  margin-bottom: 20px; /* Increased margin for spacing */
`;

const DeveloperText = styled.h3`
  color: #00FFFF;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  margin-bottom: 20px; /* Increased margin for spacing */
`;

const BioText = styled.p`
  color: #FFFFFF;
  text-align: center;
  font-size: 0.85rem;
  margin-bottom: 30px; /* Increased margin for spacing */
  font-style: italic;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px; /* Increased top margin */
  width: 100%;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 120px;
`;

const GitHubIcon = styled(FaGithub)`
  color: #00FFFF;
  font-size: 40px;
  margin-left: -30px;
  transition: color 0.3s ease;

  ${Box}:hover & {
    color: #FFFF00;
  }
`;

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Container>
        <Box>
          <ImagePlaceholder src={duncanPfp} alt="Duncan Nevin" />
          <Text>Duncan Nevin</Text>
          <DeveloperText>Senior Software Engineer</DeveloperText>
          <BioText>
            Duncan specializes in creating decentralized applications and has a strong interest in blockchain technology.
          </BioText>
          <ButtonContainer>
            <StyledButton>GitHub</StyledButton>
            <GitHubIcon />
          </ButtonContainer>
        </Box>
        <Box>
          <ImagePlaceholder src={jsonPfp} alt="jsonbourn-dev" />
          <Text>jsonbourn-dev</Text>
          <DeveloperText>A passionate Web5 Developer</DeveloperText>
          <BioText>
            jsonbourn-dev is an advocate for open-source software and loves experimenting with new web technologies.
          </BioText>
          <ButtonContainer>
            <StyledButton>GitHub</StyledButton>
            <GitHubIcon />
          </ButtonContainer>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
