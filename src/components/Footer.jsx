import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #00FFFF;
  text-align: center;
  padding: 20px 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 255, 255, 0.5);
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
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #00FFFF;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
  transition: color 0.2s, text-decoration 0.2s;

  &:hover {
    color: #FFFF00;
    text-decoration: underline;
  }
`;

const FooterContact = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #00FFFF;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <p style={{ margin: '10px 0', fontSize: '14px' }}>© 2024 All Rights Reserved</p>
      <FooterLinks>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
      </FooterLinks>
      <FooterContact>Email: Support@askadev.com | Phone: (406) 589-8118</FooterContact>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
