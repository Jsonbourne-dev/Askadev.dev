import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../components/AppBar.jsx';
import { Theme, Button } from '../styled-components';
import Footer from '../components/Footer.jsx';
import { FaLock, FaInfoCircle, FaClipboard, FaExclamationTriangle, FaQuestionCircle } from 'react-icons/fa';
import styled from 'styled-components';

// Neon Colors
const neonYellow = '#FFFF00';
const neonBlue = '#00FFFF'; // Retained for overall text color

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background-color: #000;
  margin-top: 60px;
`;

const CustomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${neonYellow}; 
  border-radius: 12px;
  padding: 20px;
  color: ${neonBlue}; /* Set all text inside CustomBox to neon blue */
  flex: 1;
  max-width: 300px; 
  margin: 0 15px 30px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Subtle shadow without glow */

  h3 {
    color: ${neonBlue}; /* h3 text in neon blue */
    margin: 0 0 10px;
    font-size: 20px;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: auto;
    color: ${neonBlue}; /* Paragraph text in neon blue */
  }
`;

const WarningBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;  
    align-items: stretch;   
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  min-width: 250px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    margin-right: 0;       
    margin-bottom: 20px;     
  }
`;

const InputLabel = styled.label`
  color: ${neonBlue}; /* Input labels in neon blue */
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid ${neonYellow}; /* Border remains neon yellow for contrast */
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  background: #000;
  color: ${neonBlue}; /* Input text in neon blue */
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${neonYellow};
    box-shadow: 0 0 5px ${neonYellow}; /* Subtle shadow on focus */
  }
`;

const ClipboardButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${neonYellow};
  color: #000;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); /* Subtle shadow without glow */

  &:hover {
    background-color: #e0b90f;
    transform: scale(1.05);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  svg {
    color: #000; /* Icons in ClipboardButton remain black */
    margin-right: 5px;
  }
`;

const FormSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const IconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-top: 10px; 
`;

const HighlightedText = styled.span`
  position: relative;
  color: #333; /* Dark grey text for highlighted elements */
  background-color: ${neonYellow};
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.div`
  visibility: hidden;
  width: 220px;
  background-color: ${neonYellow};
  color: #000;
  text-align: left;
  border-radius: 6px;
  padding: 8px 10px;
  position: absolute;
  z-index: 1;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: -5px; 
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${neonYellow} transparent;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 2px dashed ${neonYellow};
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  position: relative;

  h4 {
    margin-top: 0;
    display: flex;
    align-items: center;
    color: ${neonYellow};
    
    svg {
      margin-right: 5px;
    }
  }

  p {
    margin-bottom: 0;
  }

  a {
    color: ${neonYellow};
    text-decoration: underline;
  }
`;

// Main Component
const Profile = () => {
  const [localDID, setLocalDID] = useState('');
  const [enteredDID, setEnteredDID] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const handleGenerateNewDID = () => {
    const generatedDID = `DID:${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setLocalDID(generatedDID);
    navigator.clipboard.writeText(generatedDID)
      .then(() => alert(`New DID generated and copied to clipboard: ${generatedDID}. Please store it in a safe place!`))
      .catch(err => console.error('Failed to copy: ', err));
  };

  const copyToClipboard = (text) => {
    if (!text) {
      alert('Nothing to copy!');
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => alert(`Copied to clipboard: ${text}.`))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <>
      <AppBar />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Theme>
        <Container>
          <FormSection>
            <WarningBoxContainer>
              <CustomBox>
                <h3>Importance of Your DID</h3>
                <p>
                  Your <HighlightedText>
                    Decentralized Identifier (DID)
                    <TooltipText className="tooltiptext">
                      A DID is a unique identifier that ensures your data remains secure and accessible only to you.
                    </TooltipText>
                  </HighlightedText> is crucial for accessing your data securely. Losing it may result in losing access to all your information.
                </p>
                <IconButtonContainer>
                  <Button>Learn More</Button>
                  <FaLock size={40} color={neonYellow} /> {/* Icons in neon yellow for consistency */}
                </IconButtonContainer>
              </CustomBox>

              <CustomBox>
                <h3>Secure Your Data</h3>
                <p>
                  Ensure that your <HighlightedText>
                    secure password manager
                    <TooltipText className="tooltiptext">
                      A password manager helps in maintaining the security and accessibility of your credentials.
                    </TooltipText>
                  </HighlightedText> is saved in a secure location to protect your personal information and access to AskaDEV.
                </p>
                <IconButtonContainer>
                  <Button>Learn More</Button>
                  <FaInfoCircle size={40} color={neonYellow} /> {/* Icons in neon yellow for consistency */}
                </IconButtonContainer>
              </CustomBox>
            </WarningBoxContainer>

            <InputContainer>
              <InputWrapper>
                <InputLabel>Enter Your DID:</InputLabel>
                <Input
                  type="text"
                  placeholder="Enter your DID here"
                  value={enteredDID}
                  onChange={(e) => setEnteredDID(e.target.value)}
                />
                <ClipboardButton onClick={handleGenerateNewDID}>
                  <FaClipboard size={20} />
                  Generate and Copy DID
                </ClipboardButton>
              </InputWrapper>

              <InputWrapper>
                <InputLabel>Your Current DID:</InputLabel>
                <Input
                  type="text"
                  placeholder="Your DID will be displayed here"
                  value={localDID}
                  readOnly
                />
              </InputWrapper>
            </InputContainer>

            <InputContainer>
              <InputWrapper>
                <InputLabel>Enter Your Private Key:</InputLabel>
                <Input
                  type="text"
                  placeholder="Enter your private key here"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                />
                <ClipboardButton onClick={() => copyToClipboard(privateKey)}>
                  <FaClipboard size={20} />
                  Copy Private Key
                </ClipboardButton>
              </InputWrapper>

              <InputWrapper>
                <InputLabel>Enter Your Public Key:</InputLabel>
                <Input
                  type="text"
                  placeholder="Enter your public key here"
                  value={publicKey}
                  onChange={(e) => setPublicKey(e.target.value)}
                />
                <ClipboardButton onClick={() => copyToClipboard(publicKey)}>
                  <FaClipboard size={20} />
                  Copy Public Key
                </ClipboardButton>
              </InputWrapper>
            </InputContainer>

            <AdditionalInfo>
              <h4><FaExclamationTriangle /> Security Tips</h4>
              <p>
                Always keep your <HighlightedText>
                  Private Key
                  <TooltipText className="tooltiptext">
                    Your Private Key is confidential and should never be shared. It grants access to your secured data.
                  </TooltipText>
                </HighlightedText> confidential. Do not share it with anyone. Your <HighlightedText>
                  Public Key
                  <TooltipText className="tooltiptext">
                    Your Public Key can be shared safely. It allows others to encrypt messages or verify signatures from you.
                  </TooltipText>
                </HighlightedText> can be shared to receive data securely.
              </p>
            </AdditionalInfo>

            <AdditionalInfo>
              <h4><FaQuestionCircle /> Need Help?</h4>
              <p>
                If you encounter any issues with your DID or keys, please contact our support team or visit our <a href="/help">Help Center</a>.
              </p>
            </AdditionalInfo>
          </FormSection>
        </Container>
      </Theme>
      <Footer />
    </>
  );
};

export default Profile;
