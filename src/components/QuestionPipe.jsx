import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet';

const moveInAndOut = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  70% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000000;
  padding: 20px;

  @media (max-width: 1500px) {
    padding: 15px;
  }

  @media (max-width: 650px) {
    padding: 10px;
  }

  @media (max-width: 400px) {
    padding: 5px;
  }
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  font-size: 2rem;
  text-align: center;
  z-index: 2;
  background-color: #000000;
  padding: 10px 0;
  top: -100px;

  @media (max-width: 1500px) {
    font-size: 1.5rem;
    top: -90px;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    top: -80px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    top: -70px;
  }
`;

const PipeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 300px;
  background-color: #000000;
  border-top: 10px solid #fffb00;
  border-bottom: 10px solid #fffb00;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    border-top: 4px solid #fffb00;
    border-bottom: 4px solid #fffb00;
  }
`;

const QuestionBox = styled.div`
  font-family: 'Press Start 2P', cursive;
  border: 4px solid #FFFF00;
  border-radius: 8px;
  padding: 1.5vw;
  margin: 1.5vw;
  box-shadow: 0 0 0 4px #333333;
  background-color: #000000;
  color: #00FFFF;
  position: absolute;
  width: calc(100% - 3vw);
  max-width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  animation: ${moveInAndOut} 4s ease-in-out infinite;

  @media (max-width: 1500px) {
    padding: 1.2vw;
    margin: 1.2vw;
    font-size: 0.8rem;
  }

  @media (max-width: 650px) {
    padding: 1vw;
    margin: 1vw;
    font-size: 0.6rem;
  }

  @media (max-width: 400px) {
    padding: 0.8vw;
    margin: 0.8vw;
    font-size: 0.4rem;
  }
`;

const QuestionBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed #FFFF00;
  padding-bottom: 8px;
  margin-bottom: 16px;

  @media (max-width: 650px) {
    padding-bottom: 4px;
    margin-bottom: 8px;
  }

  @media (max-width: 400px) {
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
`;

const DateText = styled.span`
  color: #666666;
  font-size: 0.6em;

  @media (max-width: 650px) {
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    font-size: 0.4em;
  }
`;

const TitleText = styled.h2`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 650px) {
    font-size: 0.7em;
  }

  @media (max-width: 400px) {
    font-size: 0.6em;
  }
`;

const QuestionText = styled.p`
  margin: 20px 0;
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 1500px) {
    font-size: 0.9em;
  }

  @media (max-width: 650px) {
    font-size: 0.7em;
    margin: 15px 0;
  }

  @media (max-width: 400px) {
    font-size: 0.5em;
    margin: 10px 0;
  }
`;

const QuestionBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 650px) {
    margin-top: 10px;
  }

  @media (max-width: 400px) {
    margin-top: 5px;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StatsItem = styled.span`
  margin-right: 12px;
  font-size: 0.6em;
  color: #FFFF00;

  i {
    margin-right: 4px;
    color: #00FFFF;
  }

  &::before {
    content: '(';
    color: #00FFFF;
  }

  &::after {
    content: ')';
    color: #00FFFF;
  }

  .stats-value {
    color: #00FFFF;
  }

  @media (max-width: 650px) {
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    font-size: 0.4em;
  }
`;

const Flags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  @media (max-width: 650px) {
    gap: 6px;
  }

  @media (max-width: 400px) {
    gap: 4px;
  }
`;

const FlagItem = styled.span`
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: 1px solid #4A4A4A;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.6em;
  white-space: nowrap;

  @media (max-width: 650px) {
    padding: 4px 10px;
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    padding: 3px 8px;
    font-size: 0.4em;
  }
`;

const HotQuestions = [
  {
    DID: 'DID-9DRYHPI903D',
    id: 1,
    date: "2024-07-25T00:00:00Z",
    title: "How to implement lazy loading in React?",
    questionText: "What is lazy loading in React, and how can it be implemented?",
    flags: ["React", "Lazy Loading"],
    votes: 20,
    answers: 0,
    views: 90
  },
  {
    DID: 'DID-1GJ5KZLQ8MD9',
    id: 2,
    date: "2024-07-26T00:00:00Z",
    title: "How to use React Router for navigation?",
    questionText: "Can someone explain how to use React Router for handling navigation in a React app?",
    flags: ["React", "React Router"],
    votes: 26,
    answers: 0,
    views: 0
  },
  {
    DID: 'DID-KL2N4PQ8X8E0',
    id: 3,
    date: "2024-08-01T00:00:00Z",
    title: "What is the purpose of useMemo in React?",
    questionText: "Can someone explain the purpose of the useMemo hook and provide an example of how it can be used?",
    flags: ["React", "useMemo"],
    votes: 15,
    answers: 1,
    views: 45
  },
  {
    DID: 'DID-Y6W8C3L9HJ0F',
    id: 4,
    date: "2024-08-03T00:00:00Z",
    title: "How can you manage state in a React app?",
    questionText: "What are the different ways to manage state in a React application, and when should you use each method?",
    flags: ["React", "State Management"],
    votes: 12,
    answers: 2,
    views: 60
  }
];

const QuestionContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const questionBoxRef = useRef(null);

  const handleClick = () => {
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    const updatedQuestions = questions.map(q => {
      if (q.DID === HotQuestions[currentIndex].DID) {
        return { ...q, views: q.views + 1 };
      }
      return q;
    });
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    navigate(`/question/${HotQuestions[currentIndex].DID}`);
  };

  const handleAnimationEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HotQuestions.length);
  };

  useEffect(() => {
    const currentBox = questionBoxRef.current;
    if (currentBox) {
      currentBox.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (currentBox) {
        currentBox.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  const question = HotQuestions[currentIndex];

  return (
    <Container>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <Title>Hot Questions</Title>
      <PipeContainer>
        <QuestionBox ref={questionBoxRef} onClick={handleClick}>
          <QuestionBoxHeader>
            <DateText>{new Date(question.date).toLocaleDateString()}</DateText>
            <TitleText>{question.title}</TitleText>
          </QuestionBoxHeader>
          <QuestionText>{question.questionText}</QuestionText>
          <QuestionBoxFooter>
            <Stats>
              <StatsItem>
                <i className="fas fa-thumbs-up"></i> <span className="stats-value">{question.votes}</span> votes
              </StatsItem>
              <StatsItem>
                <i className="fas fa-reply"></i> <span className="stats-value">{question.answers}</span> answers
              </StatsItem>
              <StatsItem>
                <i className="fas fa-eye"></i> <span className="stats-value">{question.views}</span> views
              </StatsItem>
            </Stats>
            <Flags>
              {question.flags.slice(0, 4).map((flag, index) => (
                <FlagItem key={index}>#{flag}</FlagItem>
              ))}
            </Flags>
          </QuestionBoxFooter>
        </QuestionBox>
      </PipeContainer>
    </Container>
  );
};

export default QuestionContainer;
