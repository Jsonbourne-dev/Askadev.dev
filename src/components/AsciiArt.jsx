import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AsciiArtContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background-color: black;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const AsciiArt = styled.pre`
  color: ${({ color }) => color};
  font-family: monospace;
  white-space: pre-wrap;
  margin: 0;
  padding: 0;
  font-size: 10px; 

  @media (max-width: 1000px) {
    font-size: 15px;
  }

  @media (max-width: 950px) {
    font-size: 15px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }

  @media (max-width: 850px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }

  @media (max-width: 750px) {
    font-size: 8px;
  }

  @media (max-width: 700px) {
    font-size: 6px;
  }

  @media (max-width: 650px) {
    font-size: 6px;
  }

  @media (max-width: 600px) {
    font-size: 6px;
  }

  @media (max-width: 550px) {
    font-size: 4px;
  }
`;

const originalAsciiArt = `
\\033[96m                πππππππ\\033[0m                      \\033[91mπ×+++++∞\\033[0m                       \\033[96mπππππππ\\033[0m                 
\\033[96m            πππ√÷++++++\\033[0m                      \\033[91m∞++++++×√\\033[0m                      \\033[96mπ++++++=√ππ\\033[0m             
\\033[96m          π√÷++++++++++\\033[0m                     \\033[91m√×+++++++×\\033[0m                      \\033[96mπ+++++++++÷√π\\033[0m           
\\033[96m         π÷+++++++÷√πππ\\033[0m                    \\033[91mπ×+++×××+++∞\\033[0m                     \\033[96mπππ√÷+++++++÷π\\033[0m          
\\033[96m         π+++++++÷π\\033[0m                        \\033[91m∞+++×π ∞+++×π\\033[0m                        \\033[96mπ=+++++++√\\033[0m          
\\033[96m         √++++++÷\\033[0m                         \\033[91mπ×+++∞  π×+++×\\033[0m                          \\033[96m=++++++÷π\\033[0m         
\\033[96m        π÷++++++√\\033[0m                        \\033[91m√×+++×    √×+++∞\\033[0m                         \\033[96m√+++++++π\\033[0m         
\\033[96m        π+++++++π\\033[0m                        \\033[91m-+++×π     ∞+++×√\\033[0m                        \\033[96mπ+++++++π\\033[0m         
\\033[96m        π+++++++π\\033[0m                       \\033[91m≠++++∞      π×+++×π\\033[0m                       \\033[96mπ+++++++π\\033[0m         
\\033[96m        π+++++++π\\033[0m                      \\033[91mπ×+++×        π×+++∞\\033[0m                       \\033[96mπ+++++++π\\033[0m         
\\033[96m        π+++++++π\\033[0m                      \\033[91m×+++×√         ∞+++×√\\033[0m                      \\033[96mπ+++++++π\\033[0m         
\\033[96m        √+++++++π\\033[0m                     \\033[91m≈++++∞          π×+++×π\\033[0m                     \\033[96mπ+++++++√\\033[0m         
\\033[96m       √÷++++++÷π\\033[0m                    \\033[91m√×+++×            √×+++≈\\033[0m                     \\033[96mπ÷++++++÷√\\033[0m        
\\033[96m  πππ√÷+++++++×π\\033[0m                     \\033[91m×+++×√             ∞+++×√\\033[0m                     \\033[96mπ÷+++++++÷√ππππ\\033[0m  
\\033[96m  π+++++++÷√ππ\\033[0m                      \\033[91m≈++++≈              π×+++×π\\033[0m                      \\033[96mππ√÷++++++++π\\033[0m  
\\033[96m  π+++++++=\\033[0m                        \\033[91m√×+++×                √×+++∞\\033[0m                          \\033[96m+++++++π\\033[0m  
\\033[96m  π+++++++÷√ππ\\033[0m                     \\033[91m×+++×√                 ∞+++×√\\033[0m                     \\033[96mππ√÷++++++++π\\033[0m  
\\033[96m  πππ√÷+++++++×π\\033[0m                  \\033[91m∞++++×                  ≈++++×π\\033[0m                  \\033[96mπ√÷++++++÷√ππππ\\033[0m  
\\033[96m      π√÷++++++÷π\\033[0m                \\033[91mπ×++++×≈ππππππππππππππππ∞×+++++∞\\033[0m                  \\033[96m×+++++++÷π\\033[0m       
\\033[96m        √+++++++π\\033[0m                \\033[91m×++++++++++++++++++++++++++++++×√\\033[0m                \\033[96mπ+++++++÷\\033[0m         
\\033[96m        π+++++++π\\033[0m               \\033[91m∞++++×∞πππππππππππππππππππππ∞×+++×π\\033[0m               \\033[96mπ+++++++√\\033[0m         
\\033[96m        π+++++++π\\033[0m              \\033[91m√×+++×                        ≈++++-\\033[0m               \\033[96mπ+++++++π\\033[0m         
\\033[96m        π+++++++π\\033[0m             \\033[91mπ×+++×√                         ×++++≈\\033[0m              \\033[96mπ+++++++π\\033[0m         
\\033[96m        π+++++++π\\033[0m             \\033[91m∞++++∞                          √×+++×√\\033[0m             \\033[96mπ+++++++π\\033[0m         
\\033[96m        π÷++++++√\\033[0m            \\033[91m√×+++×π                           ∞++++×\\033[0m            \\033[96m∞+++++++π\\033[0m         
\\033[96m       √++++++÷\\033[0m           \\033[91mπ×+++×√                             ×++++≈\\033[0m           \\033[96m×++++++÷π\\033[0m         
\\033[96m        π+++++++÷π\\033[0m         \\033[91m≈++++≈                             √×+++×√\\033[0m         \\033[96mπ×+++++++√\\033[0m          
\\033[96m         π÷+++++++÷√πππ                                                     ≈++++×πππ√÷π\\033[0m          
\\033[96m          π÷+++++++++++π                                                   ×++∞π+++++++÷π\\033[0m           
\\033[96m  π√÷++++++++∞                                                   π×+++×ππ++÷√ππ\\033[0m  
\\033[96m      π√÷++++++++∞                                                π×+++×ππ++++÷π\\033[0m     
\\033[96m                            
`;

const charMap = {
  '=': ['1', '0', '1'],
  '+': ['1', '0', '1'],
  'π': ['1', '0', '1'],
  '×': ['1', '0', '1'],
  '√': ['1', '0', '1'],
  '÷': ['1', '0', '1'],
  '≈': ['1', '0', '1'],
  '≠': ['1', '0', '1'],
  '-': ['1', '0', '1'],
  '∞': ['1', '0', '1']
};

const getRandomChar = (charList) => {
  return charList[Math.floor(Math.random() * charList.length)];
};

const getUpdatedArt = (art, map) => {
  let updatedArt = art;
  for (const [key, values] of Object.entries(map)) {
    const regex = new RegExp(`\\${key}`, 'g');
    updatedArt = updatedArt.replace(regex, () => getRandomChar(values));
  }
  return updatedArt;
};

const AsciiArtComponent = () => {
  const [asciiArt, setAsciiArt] = useState(originalAsciiArt);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedArt = getUpdatedArt(originalAsciiArt, charMap);
      setAsciiArt(updatedArt);
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <AsciiArtContainer>
      <AsciiArt>
        {asciiArt.split(/(\\033\[[0-9;]+m.*?\\033\[0m)/g).map((part, index) => {
          if (part.includes('\\033[96m')) {
            return <span key={index} style={{ color: '#00FFFF' }}>{part.replace('\\033[96m', '').replace('\\033[0m', '')}</span>;
          }          
          if (part.includes('\\033[91m')) {
            return <span key={index} style={{ color: 'red' }}>{part.replace('\\033[91m', '').replace('\\033[0m', '')}</span>;
          }
          return <span key={index}>{part}</span>;
        })}
      </AsciiArt>
    </AsciiArtContainer>
  );
};

export default AsciiArtComponent;
