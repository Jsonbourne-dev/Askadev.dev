import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Theme, Container, Text, Button } from '../styled-components';
import styled from 'styled-components';

const FullWidthContainer = styled(Container)`
  width: 100%;
  background-color: #000000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 400px; 
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 2px solid #00FFFF;
  outline: none;
  color: #FFFF00;
  background-color: transparent;
  border-radius: 20;
  margin-bottom: 10px;
  
  ::placeholder {
    color: #00FFFF;
  }

  ::-webkit-input-placeholder {
    color: #00FFFF;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
`;


const ResponsiveText = styled(Text)`
  font-size: 1.5rem; 

  @media (max-width: 1024px) {
    font-size: 1.25rem; 
  }

  @media (max-width: 768px) {
    font-size: 1rem; 
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; 
  }
`;

const MallingList = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <FullWidthContainer>
          <ResponsiveText variant="title" color="#FFFF00" textAlign="center">
            Join Our Mailing List 🚀
          </ResponsiveText>
          <ResponsiveText variant="body" color="#00FFFF" textAlign="center" padding="10px 0">
            Stay updated with the latest news, updates, and more! 
          </ResponsiveText>
          <InputWrapper>
            <EmailInput 
              type="email" 
              placeholder="Enter your email..." 
              value={inputValue} 
              onChange={handleInputChange} 
            />
            <CustomButton>Submit</CustomButton>
          </InputWrapper>
        </FullWidthContainer>
      </Theme>
    </>
  );
};

export default MallingList;
