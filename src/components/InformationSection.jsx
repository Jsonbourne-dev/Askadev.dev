import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  position: absolute;
  width: 600px;
  background-color: #000000;
  border: 2px solid #FFFF00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
  color: #00FFFF;
  z-index: 3;
  box-sizing: border-box;

  left: ${props => props.position === 'left' ? '225px' : 'auto'};
  right: ${props => props.position === 'right' ? '225px' : 'auto'};
  top: ${props => props.top}px;

  @media (max-width: 1000px) {
    width: 70%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 10px;
  }

  @media (max-width: 576px) {
    width: 90%;
    padding: 5px;
    max-width: 300px; 
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.75rem;
  margin: 0;
  color: #FFFF00;
  word-break: break-word; 

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    max-width: 300px; 
  }
`;

const SectionText = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  margin-top: 8px;
  line-height: 1.4;

  @media (max-width: 1000px) {
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    max-width: 300px; 
  }
`;

const InformationSection = ({ title, text, position, top }) => (
  <SectionContainer position={position} top={top}>
    <SectionTitle>{title}</SectionTitle>
    <SectionText>{text}</SectionText>
  </SectionContainer>
);

export default InformationSection;
