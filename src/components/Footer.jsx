import React, { useEffect, useState } from 'react'; 
import styled from 'styled-components';
import { Button } from '../styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF, faGithub, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const FooterWrapper = styled.footer`
  width: 100%;
  height: 150px;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.5);
  color: #ECF0F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  text-align: center;
  position: relative;
  padding: 10px 0;
  
  @media (max-width: 800px) {
    height: 200px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  gap: 10px; 
  margin-bottom: 10px;
  padding-top: 10px; 

  @media (min-width: 800px) {
    flex-direction: row; 
  }
`;

const TopButtonGroup = styled.div`
  display: flex; 
  gap: 5px;
  
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const BottomButtonGroup = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 

  @media (min-width: 800px) {
    flex-direction: row; 
    gap: 10px; 
  }
`;

const IconButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px; 
`;

const IconButton = styled(Button)`
  width: 35px; 
  height: 35px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 0 5px; 
`;

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 800);
  };

  useEffect(() => {
    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonVariant = isSmallScreen ? "phone-transparent" : "desktop-transparent";

  return (
    <FooterWrapper>
      <ButtonContainer>
        <TopButtonGroup>
          <Button variant={buttonVariant} lineBelowText={true}>About Us</Button>
          <Button variant={buttonVariant} lineBelowText={true}>Connect Us</Button>
        </TopButtonGroup>
        <BottomButtonGroup>
          <Button variant={buttonVariant} lineBelowText={true}>Privacy Policy</Button>
          <Button variant={buttonVariant} lineBelowText={true}>Terms of Service</Button>
        </BottomButtonGroup>
      </ButtonContainer>
      <IconButtonContainer>
        <IconButton variant="desktop-transparent">
          <FontAwesomeIcon icon={faFacebookF} />
        </IconButton>
        <IconButton variant="desktop-transparent">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
        <IconButton variant="desktop-transparent">
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
        <IconButton variant="desktop-transparent">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconButton>
        <IconButton variant="desktop-transparent">
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
      </IconButtonContainer>
    </FooterWrapper>
  );
};

export default Footer;
