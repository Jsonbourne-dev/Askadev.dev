import React from 'react';
import './components_css/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2024 All Rights Reserved</p>
      <div className="footer-links">
        <a href="/about" className="footer-link">About Us</a>
        <a href="/contact" className="footer-link">Contact</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <a href="/terms" className="footer-link">Terms of Service</a>
      </div>
      <p className="footer-contact">Email: Support@askadev.com | Phone: (406) 589-8118</p>
    </div>
  </footer>
);

export default Footer;
