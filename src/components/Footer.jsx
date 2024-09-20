import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #FFFF00; 
  color: #000000;
  text-align: center;
  padding: 20px 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #000000;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #00fff2; 
  }
`;

const FooterIcons = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  a {
    color: #000000;
    font-size: 24px;
    margin: 0 15px;
    transition: color 0.3s;

    &:hover {
      color: #00fff2;
    }
  }
`;

const FooterContact = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #000000;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const Test = () => (
  <FooterWrapper>
    <FooterContent>
      <p style={{ margin: '10px 0', fontSize: '18px', fontWeight: 'bold' }}>© 2024 All Rights Reserved</p>
      <FooterLinks>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
      </FooterLinks>
      <FooterIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </FooterIcons>
      <FooterContact>Email: Support@askadev.com | Phone: (406) 589-8118</FooterContact>
    </FooterContent>
  </FooterWrapper>
);

export default Test;
