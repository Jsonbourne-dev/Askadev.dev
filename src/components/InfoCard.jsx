import React from 'react';
import './components_css/InfoCard.css';

const InfoCard = ({ title, value }) => {
  return (
    <div className="info-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default InfoCard;
