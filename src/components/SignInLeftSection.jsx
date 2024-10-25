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
`;

const PlanetContainer = styled.div`
  border-radius: 50%;
  box-shadow: 5px -3px 10px 3px #5e90f1;
  height: 500px;
  width: 500px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  transform: translate(100px, 350px); 
`;

const Night = styled.div`
  animation: ${rotateNight} 80s linear infinite;
  background-image: url(${nightMap});
  background-size: 200%;
  height: 500px;
  width: 500px;
  position: absolute;
  z-index: 2;
`;

const InnerShadow = styled.div`
  background: transparent;
  border-radius: 50%;
  box-shadow: -5px 0 10px 1px #152b57 inset, 5px 0 10px 1px #040615 inset;
  height: 500px;
  width: 500px;
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
  width: 1000px; /* Adjust the width as necessary */
  position: absolute;
  top: calc(50% - 250px); 
  left: 50%;  /* Move title to the right */
  transform: translate(-50%, -50%); 
  color: #fff;
  font-size: 50px; 
  z-index: 10; 
  text-align: center; 
`;

const SubtitleText = styled.h2`
  width: 1000px;
  position: absolute;
  top: calc(50% - 180px); 
  left: 50%;  /* Move subtitle to the right */
  transform: translate(-50%, -50%); 
  color: #fff; 
  font-size: 25px;
  z-index: 10; 
  text-align: center; 
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
      <PlanetContainer>
        <Night />
        <InnerShadow />
      </PlanetContainer>
      <a href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <LogoImage src={Logo} alt="Logo" />
      </a>
      <TitleText>Code. Collaborate. Connect.</TitleText>
      <SubtitleText>Collaborate globally, solve problems together.</SubtitleText>
      <CenterLine />
    </LeftHalf>
  );
};

export default SignInLeftSection;
