import React from 'react';
import { Helmet } from 'react-helmet';
import { Theme, Container, Button, Text } from '../styled-components';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background-color: yellow; /* Yellow background */
  width: 100vw;
  height: 100vh; /* Full height */
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  padding: 20px;
`;

const TextContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #f0db4f; /* Softer yellow */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px; /* Spacing between text and input */
`;

const EmailInputContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #f0db4f; /* Softer yellow */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch; /* Stretch elements to fill container */
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  width: 100%; /* Full width */
  max-width: 400px; /* Max width for container */
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #f0db4f; /* Softer yellow */
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: black; /* Changed text color for visibility */
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #f0db4f; /* Softer yellow */
  color: black;
  font-size: 1rem;
  padding: 10px;
  border: none; /* No border */
  border-radius: 4px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #d4c26e; /* Darker shade on hover */
  }
`;

const Test = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <StyledBackground>
          <div>
            <TextContainer>
              <Text variant="title" fontSize="2rem" color="#f0db4f">
                Join our mailing list for the latest updates!
              </Text>
            </TextContainer>
            <EmailInputContainer>
              <EmailInput type="email" placeholder="Enter your email" />
              <SubmitButton>Subscribe</SubmitButton>
            </EmailInputContainer>
          </div>
        </StyledBackground>
      </Theme>
    </>
  );
};

export default Test;
