import React from 'react';
import styled from 'styled-components';


import '@fontsource/press-start-2p'; 

const InfoCardWrapper = styled.div`
  background: #000000; 
  border: 4px solid #FFFF00; 
  border-radius: 12px; 
  padding: 30px;
  color: #00FFFF;
  width: 300px;
  max-width: 90%; 
  text-align: center; 
  margin: 20px; 
  box-shadow: 0 4px 8px rgba(255, 255, 0, 0.5),
              0 -2px 4px rgba(255, 255, 0, 0.4), 
              inset 0 0 5px rgba(255, 255, 0, 0.7); 
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  font-family: 'Press Start 2P', cursive; /* Retro pixelated font */

  &:hover {
    transform: translateY(-10px) rotate(-2deg); 
    box-shadow: 0 8px 16px rgba(255, 255, 0, 0.7),
                0 -4px 8px rgba(255, 255, 0, 0.5), 
                inset 0 0 10px rgba(255, 255, 0, 0.8);
    background: #1a1a1a; 
  }
`;

const CardTitle = styled.h2`
  font-size: 20px; /* Adjusted size to fit the pixelated font */
  margin-bottom: 10px; 
  color: #00FFFF;
  text-shadow: 0 0 5px #00FFFF, 
               0 0 10px #00FFFF;
  letter-spacing: 1px;
  font-family: 'Press Start 2P', cursive; /* Ensure the font is applied here */
`;

const CardValue = styled.p`
  font-size: 24px; /* Adjusted size to fit the pixelated font */
  font-weight: bold; 
  color: #FFFF00; 
  text-shadow: 0 0 5px #FFFF00, 
               0 0 10px #FFFF00; 
  letter-spacing: 1px;
  font-family: 'Press Start 2P', cursive; /* Ensure the font is applied here */
`;

const InfoCard = ({ title, value }) => (
  <InfoCardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardValue>{value}</CardValue>
  </InfoCardWrapper>
);

export default InfoCard;
