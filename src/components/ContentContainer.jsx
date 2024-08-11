import React from 'react';
import styled from 'styled-components';
import AsciiArt from './AsciiArt';

const ContentContainer = styled.div`
  margin-top: 150px; 
  margin-left: 200px; 
  margin-right: 300px; 
  display: flex;
  align-items: flex-start; 
  width: calc(100% - 500px); 
  box-sizing: border-box;

  @media (max-width: 1600px) {
    margin: 100px 20px 20px 20px; 
    width: calc(100% - 40px); 
    flex-direction: column; 
    align-items: center;
  }

  @media (max-width: 500px) {
    margin: 150px 10px 10px 10px; 
    width: calc(100% - 20px); 
    flex-direction: column; 
    align-items: center;
  }
`;

const TextContainer = styled.div`
  margin-right: 20px; 
  max-width: 60%; 

  @media (max-width: 1600px) {
    margin-right: 0; 
    max-width: 50%; 
    text-align: center; 
  }

  @media (max-width: 500px) {
    margin-right: 0; 
    max-width: 100%; 
    text-align: center; 
  }
`;

const TitleText = styled.h1`
  color: #00FFFF;
  font-family: 'Courier New', Courier, monospace; 
  font-size: 56px; 
  font-weight: bold; 
  text-shadow: 2px 2px 4px rgba(0, 255, 255, 0.9); 
  text-align: left; 
  margin-bottom: 20px; 

  @media (max-width: 1600px) {
    font-size: 32px; 
    text-align: center; 
  }

  @media (max-width: 500px) {
    font-size: 28px; 
    text-align: center; 
  }
`;

const DescriptionText = styled.p`
  color: #00FFFF;
  font-family: 'Courier New', Courier, monospace; 
  font-size: 22px; 
  line-height: 1.6; 
  text-shadow: 1px 1px 2px rgba(0, 255, 255, 0.5); 
  text-align: left; 
  width: 100%; 

  @media (max-width: 1600px) {
    font-size: 18px; 
    text-align: center; 
  }

  @media (max-width: 500px) {
    font-size: 16px; 
    text-align: center; 
  }
`;

const Highlight = styled.span`
  color: #FFFF00;
  background-color: #333333;
  padding: 2px 4px; 
  border-radius: 3px; 
  font-weight: bold; 
`;

const ContentContainerComponent = () => (
  <ContentContainer>
    <TextContainer>
      <TitleText>Welcome to Askadev</TitleText>
      <DescriptionText>
        At <Highlight>Askadev</Highlight>, we believe that <Highlight>knowledge</Highlight> is a powerful tool for <Highlight>transformation</Highlight>. Our mission is to harness this power by providing unparalleled <Highlight>solutions</Highlight> and <Highlight>support</Highlight> to individuals and communities around the world. Here, we’re not just about answering questions—we’re about igniting a journey of <Highlight>discovery</Highlight>, <Highlight>innovation</Highlight>, and <Highlight>growth</Highlight>.
      </DescriptionText>
    </TextContainer>
    <AsciiArt />
  </ContentContainer>
);

export default ContentContainerComponent;
