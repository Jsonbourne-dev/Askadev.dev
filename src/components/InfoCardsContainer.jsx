import React from 'react';
import InfoCard from './InfoCard';
import './components_css/InfoCardsContainer.css';

const InfoCardsContainer = () => {
  return (
    <div className="info-cards-container">
      <InfoCard title="Questions Asked" value="7,214" />
      <InfoCard title="Joined Users" value="5,678" />
      <InfoCard title="Questions Solved" value="6,560" />
    </div>
  );
};

export default InfoCardsContainer;
