import React from 'react';
import { Helmet } from 'react-helmet';
import { Theme, Container, Text, Button } from '../styled-components'; 
import styled from 'styled-components';

const StyledBackground = styled.div`
  background-color: black;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center; /* Center items vertically */
  padding: 20px; /* Add some padding */
`;

const LeftContainer = styled.div`
  flex: 1;
  color: #FFFF00;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailInputContainer = styled(Container)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  border: 4px solid #FFFF00;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Align items to the right */
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #FFFF00;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 1rem;
  background-color: transparent;
  color: white;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: yellow;
  color: black;
  font-size: 1rem;
  padding: 10px;
`;

const Test = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <StyledBackground>
          <LeftContainer>
            Join our mailing list for the latest updates!
          </LeftContainer>
          <EmailInputContainer>
            <EmailInput type="email" placeholder="Enter your email" />
            <SubmitButton>Subscribe</SubmitButton>
          </EmailInputContainer>
        </StyledBackground>
      </Theme>
    </>
  );
};

export default Test;
