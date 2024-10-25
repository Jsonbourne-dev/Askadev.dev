import React from 'react';
import styled from 'styled-components';
import { Button, Container } from "../styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  @media (max-width: 1000px) {
    display: none; 
  }
`;

const HeaderText = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-weight: bold;
  font-size: 48px;
  margin: 0;
  color: white;
  line-height: 1.2;

  @media (max-width: 1000px) {
    font-size: 36px; 
  }
`;

const DescriptionText = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 26px;
  font-weight: 500;
  margin: 10px 0 0;
  color: white;
  line-height: 1.5;

  @media (max-width: 1000px) {
    font-size: 20px; 
  }
`;

const ResponsiveContainer = styled(Container)`
  width: 650px; 
  height: 250px; 
  border-radius: 8px; 
  padding: 20px;

  @media (max-width: 1000px) {
    width: 90%; 
    height: auto; 
    padding: 15px; 
  }
`;

const SignupComponent = () => {
  return (
    <ResponsiveContainer>
      <HeaderText>Code. Collaborate. Connect.</HeaderText>
      <DescriptionText>
        Dive into a vast pool of knowledge. Get answers, share your expertise, and connect with fellow developers.
      </DescriptionText>
      <ButtonContainer>
        <Button variant="desktop-filled" width="450px">Sign up</Button>
      </ButtonContainer>
    </ResponsiveContainer>
  );
};

export default SignupComponent;
