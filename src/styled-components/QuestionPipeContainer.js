import styled, { keyframes } from 'styled-components';

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

export const QuestionPipeContainer = styled.div`
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

export const QuestionPipeTitle = styled.h1`
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

export const QuestionPipeContent = styled.div`
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

export const QuestionPipeBox = styled.div`
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

export const QuestionPipeHeader = styled.div`
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

export const QuestionPipeDate = styled.span`
  color: #666666;
  font-size: 0.6em;

  @media (max-width: 650px) {
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    font-size: 0.4em;
  }
`;

export const QuestionPipeTitleText = styled.h2`
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

export const QuestionPipeQuestionText = styled.p`
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

export const QuestionPipeFooter = styled.div`
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

export const QuestionPipeStats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const QuestionPipeStatsItem = styled.span`
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

export const QuestionPipeFlags = styled.div`
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

export const QuestionPipeFlagItem = styled.span`
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
