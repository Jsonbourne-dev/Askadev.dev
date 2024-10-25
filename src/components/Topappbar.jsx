import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Container } from "../styled-components"; 
import DesktopLogo from '../assets/desktoplogo.svg';
import PhoneLogo from '../assets/phonelogo.svg';
import SmallLogo from '../assets/smalllogo.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

const AppBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #11141A;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  height: ${(props) => (props.isSmallScreen ? '60px' : '80px')};
`;

const Logo = styled.img`
  height: ${(props) => (props.isSmall ? '20px' : '40px')}; 
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => (props.isSmallScreen ? '0' : '30px')}; 
  padding-right: 50px;

  @media (max-width: 1000px) {
    padding-right: 40px;
  }
`;

const UserButton = styled(Button)`
  border-radius: ${(props) => (props.isSmallScreen ? '8px' : '8px')}; 
  padding: ${(props) => (props.isSmallScreen ? '8px 16px' : '8px')};
  width: ${(props) => (props.isSmallScreen ? 'auto' : 'auto')}; 
  height: ${(props) => (props.isSmallScreen ? 'auto' : 'auto')}; 
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; 
`;

const AppBar = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isSignedIn = useSelector((state) => state.user.isSignedIn); 
  const username = useSelector((state) => state.user.username); 

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isDesktop = screenSize > 1200;
  const isSmallScreen = screenSize < 800;

  const logoSrc = isSmallScreen ? SmallLogo : isDesktop ? DesktopLogo : PhoneLogo;

  const buttonVariant = isDesktop ? "desktop" : "phone";
  const buttonWidth = isDesktop ? "150px" : "100px"; 
  const docButtonWidth = isSmallScreen ? "70px" : buttonWidth;

  const handleCommunityClick = () => {
    window.location.href = '/#/community'; 
  };

  const handleSignUpClick = () => {
    window.location.href = '/#/signup'; 
  };

  const handleUserClick = () => {
    window.location.href = '/#/user'; 
  };

  return (
    <AppBarContainer width="100%" isSmallScreen={isSmallScreen}> 
      <a href="/"> 
        <Logo src={logoSrc} alt={isSmallScreen ? "Small Logo" : isDesktop ? "Desktop Logo" : "Phone Logo"} isSmall={isSmallScreen} />
      </a>
      <ButtonGroup isSmallScreen={isSmallScreen}> 
        {isDesktop ? (
          <>
            <Button
              variant={`${buttonVariant}-outlined`}
              width={buttonWidth}
              onClick={handleCommunityClick}
            >
              Community
            </Button>
            <Button variant={`${buttonVariant}-outlined`} width={docButtonWidth}>
              Doc
            </Button> 
            
            {isSignedIn ? (
              <UserButton
                variant={`${buttonVariant}-filled`} 
                onClick={handleUserClick}
                isSmallScreen={isSmallScreen}
              >
                {username} 
              </UserButton>
            ) : (
              <Button 
                variant={`${buttonVariant}-filled`} 
                width={buttonWidth} 
                onClick={handleSignUpClick}
              >
                Sign up
              </Button>
            )}
          </>
        ) : (
          <>
            {isSignedIn ? (
              <UserButton
                variant={`${buttonVariant}-filled`} 
                onClick={handleUserClick}
                isSmallScreen={isSmallScreen}
              >
                {username} 
              </UserButton>
            ) : (
              <Button 
                variant={`${buttonVariant}-filled`} 
                width={buttonWidth} 
                onClick={handleSignUpClick}
              >
                Sign up
              </Button>
            )}
          </>
        )}
      </ButtonGroup>
    </AppBarContainer>
  );
};

export default AppBar;
