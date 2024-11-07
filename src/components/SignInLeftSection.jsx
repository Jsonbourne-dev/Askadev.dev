// src/components/SignInLeftSection.jsx

import React from "react";
import styled, { keyframes } from "styled-components";
import nightMap from "../assets/2k_earth_nightmap.jpg"; 
import Logo from "../assets/logo-green.svg"; 

const rotateNight = keyframes`
  0% { background-position: calc(120% + 120px) 0; }
  100% { background-position: calc(-80% + 120px) 0; }
`;

const LeftHalf = styled.div`
  background-color: #000;
  height: 100%;
  width: 50%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Default: Vertically center content */
  justify-content: center;

  /* Media query for smaller screens: Shift all content down */
  @media (max-width: 768px) {
    justify-content: flex-start;  /* Move content to top */
    padding-top: 150px;  /* Increased padding to move everything down */
  }

  @media (max-width: 480px) {
    justify-content: flex-start;  /* Move content to top */
    padding-top: 200px;  /* Even more padding for very small screens */
  }
`;

const PlanetContainer = styled.div`
  border-radius: 50%;
  box-shadow: 5px -3px 10px 3px #5e90f1;
  height: 40vw;  /* Earth size as a percentage of viewport width */
  width: 40vw;  /* Same for width */
  max-height: 600px;  /* Limit max size */
  max-width: 600px;   /* Limit max size */
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-top: 20px;  /* Adjusted to make planet a bit further down from text */
`;

const Night = styled.div`
  animation: ${rotateNight} 80s linear infinite;
  background-image: url(${nightMap});
  background-size: 200%;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

const InnerShadow = styled.div`
  background: transparent;
  border-radius: 50%;
  box-shadow: -5px 0 10px 1px #152b57 inset, 5px 0 10px 1px #040615 inset;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 5;
`;

const CenterLine = styled.div`
  position: absolute;
  right: 0;  /* Right side of the section */
  top: 0;
  height: 100vh;
  width: 2px;
  background-color: #bee239;
`;

const TitleText = styled.h1`
  color: #fff;
  font-size: 50px;
  text-align: center;
  z-index: 10;
  margin: 0;  /* Remove margin to eliminate gap between title and subtitle */
`;

const SubtitleText = styled.h2`
  color: #fff;
  font-size: 25px;
  text-align: center;
  z-index: 10;
  margin: 0;  /* Remove margin to eliminate gap between subtitle and title */
`;

const LogoImage = styled.img`
  position: absolute;
  top: 20px;  
  left: 20px;
  width: 150px;
  z-index: 10;
`;

const SignInLeftSection = () => {
  return (
    <LeftHalf>
      <a href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <LogoImage src={Logo} alt="Logo" />
      </a>
      <TitleText>Code. Collaborate. Connect.</TitleText>
      <SubtitleText>Collaborate globally, solve problems together.</SubtitleText>
      <PlanetContainer>
        <Night />
        <InnerShadow />
      </PlanetContainer>
      <CenterLine />
    </LeftHalf>
  );
};

export default SignInLeftSection;
