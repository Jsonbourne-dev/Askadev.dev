import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Button } from '../styled-components'

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
  font-family: 'Press Start 2P', cursive; 

  @media (max-width: 1000px) {
    width: 95%;
    padding: 25px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 15px;
  }
`;

const HeaderAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 2px solid #00FFFF;
  padding-bottom: 10px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    margin-bottom: 15px;
  }
`;

const QuestionsTitle = styled.div`
  font-size: 16px;
  color: #00FFFF;
  text-shadow: 2px 2px 0 #000000;
  flex-grow: 1;
  margin-right: 20px;
  white-space: nowrap;
  overflow: visible;
  text-overflow: clip; 

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;




const TabsAndCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
    padding: 0 10px;
  }
`;

const QuestionsCount = styled.div`
  font-size: 16px; 
  color: #FFFF00;
  text-shadow: 1px 1px 0 #000000;
  margin-right: 20px;
  white-space: nowrap;
  font-family: 'Press Start 2P', cursive; 

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
    margin-right: 15px;
  }

  @media (max-width: 900px) {
    font-size: 10px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid #00FFFF;
  border-radius: 5px;
  background: linear-gradient(145deg, #333333, #000000);
  overflow: hidden;
  max-width: 600px;


  @media (max-width: 900px) {
    height: 30px;
    max-width: 100%;
  }
`;

const Tab = styled.div`
  flex: 1;
  padding: 6px; 
  color: #00FFFF;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-right: 1px solid #00FFFF;
  font-size: 12px; 
  font-family: 'Press Start 2P', cursive; 

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

  @media (max-width: 1000px) {
    border-right: none;
    border-bottom: 1px solid #00FFFF;
  }

  @media (max-width: 900px) {
    font-size: 10px;
    padding: 4px;
  }

  @media (max-width: 600px) {
    font-size: 8px; 
    padding: 2px;
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
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <QuestionsPanelContainer>
        <HeaderAndButtonContainer>
          <QuestionsTitle>
            {getTitle()}
          </QuestionsTitle>
          <Button onClick={handleAskQuestion}>Ask Question</Button>
        </HeaderAndButtonContainer>
        <TabsAndCountContainer>
          <QuestionsCount>140,233 Questions</QuestionsCount>
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
        </TabsAndCountContainer>
      </QuestionsPanelContainer>
    </>
  );
};

export default QuestionsPanel;
