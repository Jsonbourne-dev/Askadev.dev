import React from 'react';
import '../screens_css/Welcome.css';
import AppBar from '../components/AppBar.jsx';
import ContentContainer from '../components/ContentContainer.jsx';
import AsciiArt from '../components/AsciiArt.jsx';
import AdditionalInfo from '../components/AdditionalInfo.jsx';
import InfoCardsContainer from '../components/InfoCardsContainer.jsx';
import Footer from '../components/Footer.jsx';
const Welcome = () => {
  return (
    <div className="page-container">
      <AppBar />
      <ContentContainer />
      <AdditionalInfo />
      <InfoCardsContainer />
      <Footer />
    </div>
  );
};

export default Welcome;
