import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components_css/QuestionPanel.css';

const QuestionsPanel = ({ onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState('Latest');
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  const generateRandomDID = () => {
    return 'DID-' + Math.random().toString(36).substr(2, 16).toUpperCase();
  };

  const handleAskQuestion = () => {
    let did = localStorage.getItem('DID');
    
    if (!did) {
      did = generateRandomDID();
      localStorage.setItem('DID', did);
    }

    navigate(`/askquestion/${did}`);
  };

  const getTitle = () => {
    switch (selectedTab) {
      case 'Old':
        return 'Old Questions';
      case 'Unanswered':
        return 'Unanswered Questions';
      case 'Bountied':
        return 'Bountied Questions';
      default:
        return 'All Questions';
    }
  };

  return (
    <div className="questionsPanel-container">
      <div className="questions-header">
        <div className="questions-title">
          {getTitle()}
        </div>
        <div className="questions-count">140,233 Questions</div>
      </div>
      <div className="tabs-and-button-container">
        <button className="ask-question-button" onClick={handleAskQuestion}>Ask Question</button>
        <div className="tabs">
          {['Latest', 'Old', 'Unanswered', 'Bountied'].map((tab) => (
            <div
              key={tab}
              className={`tab ${selectedTab === tab ? 'selected' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPanel;
