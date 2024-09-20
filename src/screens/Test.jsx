import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Theme, Container, Text, Button } from '../styled-components';
import styled from 'styled-components';

const FullWidthContainer = styled(Container)`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 4px solid #FFFF00;
  border-radius: 8px;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 400px; /* Reduced width */
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
  border-radius: 0; /* Sharp corners */
  margin-bottom: 10px;
  
  ::placeholder {
    color: #00FFFF;
  }

  ::-webkit-input-placeholder {
    color: #00FFFF;
  }
`;

const CustomButton = styled(Button)`
  width: 100%; /* Same width as the input */
`;

const Test = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    const transformedInput = input
      .replace(/@/, '@'.fontcolor('red'))
      .replace(/[^@]/g, (char) => char.fontcolor('yellow'))
      .replace(/[^a-zA-Z@]/g, (char) => char.fontcolor('neonblue')); // You may adjust this for specific text rendering
    setInputValue(transformedInput);
  };

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <FullWidthContainer>
          <Text variant="title" fontSize="2rem" color="#FFFF00" textAlign="center">
            Join Our Mailing List 🚀
          </Text>
          <Text variant="body" fontSize="1.2rem" color="#00FFFF" textAlign="center" padding="10px 0">
            Stay updated with the latest news, updates, and more! 💌
          </Text>
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

export default Test;
