import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Import retro pixelated font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  body {
    font-family: 'Press Start 2P', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


const QuestionsPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #000000;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 100%;
    padding: 15px;
  }
`;

const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid #00FFFF;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

const QuestionsTitle = styled.div`
  font-size: 24px;
  color: #00FFFF;
  text-shadow: 2px 2px 0 #000000;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const QuestionsCount = styled.div`
  font-size: 18px;
  color: #FFFF00;
  margin-top: 10px;
  text-shadow: 1px 1px 0 #000000;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const TabsAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 700px) {
    align-items: stretch;
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #00FFFF;
  border-radius: 5px;
  background: linear-gradient(145deg, #333333, #000000);
  overflow: hidden;
  width: 100%;
  max-width: 600px;

  @media (max-width: 700px) {
    flex-direction: column; 
  }
`;

const Tab = styled.div`
  flex: 1;
  padding: 12px; 
  color: #00FFFF;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-right: 1px solid #00FFFF;
  font-size: 16px;

  &:last-child {
    border-right: none;
  }

  &.selected {
    background-color: #00FFFF;
    color: #000000;
    font-weight: bold;
  }

  &:hover {
    background-color: #00C7B6;
  }

  @media (max-width: 700px) {
    border-right: none;
    border-bottom: 1px solid #00FFFF;
  }
`;

const AskQuestionButton = styled.button`
  padding: 12px 24px;
  background: #FFFF00;
  border: 4px solid #E1B91E;
  border-radius: 6px;
  color: #000000;
  font-size: 16px; 
  cursor: pointer;
  text-shadow: 1px 1px 0 #000000;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 6px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);

  &:active {
    background: #E1B91E;
    border-color: #D0A10D;
    box-shadow: 0 2px 0 #D0A10D, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }

  @media (max-width: 700px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;


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
    <>
      <GlobalStyle />
      <QuestionsPanelContainer>
        <QuestionsHeader>
          <QuestionsTitle>
            {getTitle()}
          </QuestionsTitle>
          <QuestionsCount>140,233 Questions</QuestionsCount>
        </QuestionsHeader>
        <TabsAndButtonContainer>
          <AskQuestionButton onClick={handleAskQuestion}>Ask Question</AskQuestionButton>
          <Tabs>
            {['Latest', 'Old', 'Unanswered', 'Bountied'].map((tab) => (
              <Tab
                key={tab}
                className={selectedTab === tab ? 'selected' : ''}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </Tab>
            ))}
          </Tabs>
        </TabsAndButtonContainer>
      </QuestionsPanelContainer>
    </>
  );
};

export default QuestionsPanel;
