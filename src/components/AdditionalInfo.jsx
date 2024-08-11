import React from 'react';
import styled from 'styled-components';

const AdditionalInfoContainer = styled.div`
  margin-top: 50px; 
  margin-left: 200px; 
  margin-right: 300px; 
  padding: 20px;
  background-color: #000000; 
  border-radius: 10px; 
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1600px) {
    margin: 20px auto; 
    width: 50%; 
    max-width: 90%; 
    padding: 10px; 
  }

  @media (max-width: 500px) {
    margin: 20px auto; 
    width: 90%; 
    max-width: 90%; 
    padding: 10px; 
  }
`;

const Heading = styled.h2`
  color: #00FFFF; 
  font-family: 'Courier New', Courier, monospace; 
  font-size: 40px; 
  margin-bottom: 20px; 
  text-shadow: 1px 1px 3px rgba(0, 255, 255, 0.7); 

  @media (max-width: 1600px) {
    font-size: 28px; 
  }

  @media (max-width: 500px) {
    font-size: 28px; 
  }
`;

const Paragraph = styled.p`
  color: #00FFFF; 
  font-family: 'Courier New', Courier, monospace; 
  font-size: 22px; 
  line-height: 1.6; 
  text-shadow: 1px 1px 2px rgba(0, 255, 255, 0.5); 

  @media (max-width: 1600px) {
    font-size: 24px; 
  }

  @media (max-width: 500px) {
    font-size: 16px; 
  }
`;

const Highlight = styled.span`
  color: #FFFF00;
  background-color: #333333;
  padding: 2px 4px; 
  border-radius: 3px; 
  font-weight: bold; 
`;

const Askadev = styled(Highlight)`
  color: #FFFF00;
  background-color: #333333;
  padding: 2px 4px; 
  border-radius: 3px; 
  font-weight: bold; 
`;

const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <Heading>Exploring <Highlight>Web5</Highlight> and <Highlight>DIDs</Highlight></Heading>
      <Paragraph>
        At <Askadev>Askadev</Askadev>, we're at the forefront of <Highlight>Web5</Highlight>, a fusion of Web3's decentralization with Web2's user-focused design. This next-gen approach enhances <Highlight>security</Highlight> and <Highlight>privacy</Highlight>, offering a richer and more personal web experience. With <Highlight>Decentralized Identifiers (DIDs)</Highlight>, users control their own data, reducing reliance on intermediaries and boosting trust in digital interactions.
      </Paragraph>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
