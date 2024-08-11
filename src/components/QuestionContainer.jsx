import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';


const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
`;

const QuestionBox = styled.div`
  font-family: 'Press Start 2P', cursive;
  border: 4px solid #FFFF00;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  box-shadow: 0 0 0 4px #333333;
  background-color: #000000;
  color: #00FFFF;
  position: relative;
  width: calc(100% - 80px);
  max-width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(255, 255, 0, 0.7);
  }

  @media (max-width: 900px) {
    width: calc(100% - 40px);
    padding: 16px;
    margin: 16px auto;

    .question-text,
    .flags {
      display: none;
    }

    font-size: 16px;
  }

  @media (max-width: 500px) {
    width: calc(100% - 32px);
    margin: 8px;
    padding: 8px;

    font-size: 14px;

    .question-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .title {
      font-size: 16px;
    }

    .date {
      font-size: 12px;
    }

    .stats {
      font-size: 12px;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
    }

    .stats-item {
      margin-right: 8px;
      font-size: 12px;
    }

    .flags {
      display: none;
    }

    .question-box-footer {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 6px;
    }
  }

  @media (max-width: 370px) {
    width: calc(100% - 24px);
    margin: 4px;
    padding: 4px;
    max-height: 40px;
    overflow: hidden;

    font-size: 12px;

    .question-box-footer {
      display: none;
    }
  }
`;

const QuestionBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed #FFFF00;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

const DateText = styled.span`
  color: #666666;
  font-size: 16px;
`;

const TitleText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const QuestionText = styled.p`
  margin: 20px 0;
  font-size: 18px;
`;

const QuestionBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StatsItem = styled.span`
  margin-right: 12px;
  font-size: 16px;
  color: #FFFF00;

  i {
    margin-right: 4px;
    color: #00FFFF;
  }
`;

const Flags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FlagItem = styled.span`
  background-color: #666666;
  color: #000000;
  border: 1px solid #666666;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 16px;
  white-space: nowrap;
`;

const QuestionContainer = ({ date, title, questionText, flags = [], votes, answers, views, code, DID }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    const updatedQuestions = questions.map(q => {
      if (q.DID === DID) {
        return { ...q, views: q.views + 1 };
      }
      return q;
    });
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    navigate(`/question/${DID}`);
  };

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <QuestionBox onClick={handleClick}>
        <QuestionBoxHeader>
          <DateText>{new Date(date).toLocaleDateString()}</DateText>
          <TitleText>{title}</TitleText>
        </QuestionBoxHeader>
        <QuestionText>{questionText}</QuestionText>
        <QuestionBoxFooter>
          <Stats>
            <StatsItem>
              <i className="fas fa-thumbs-up"></i> {votes} votes
            </StatsItem>
            <StatsItem>
              <i className="fas fa-reply"></i> {answers.length} answers
            </StatsItem>
            <StatsItem>
              <i className="fas fa-eye"></i> {views} views
            </StatsItem>
          </Stats>
          <Flags>
            {flags.slice(0, 4).map((flag, index) => (
              <FlagItem key={index}>#{flag}</FlagItem>
            ))}
          </Flags>
        </QuestionBoxFooter>
      </QuestionBox>
    </>
  );
};

export default QuestionContainer;
