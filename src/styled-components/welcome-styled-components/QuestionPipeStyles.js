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

export const Container = styled.div`
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

export const Title = styled.h1`
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

export const PipeContainer = styled.div`
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

export const QuestionBox = styled.div`
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

export const QuestionBoxHeader = styled.div`
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

export const DateText = styled.span`
  color: #666666;
  font-size: 0.6em;

  @media (max-width: 650px) {
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    font-size: 0.4em;
  }
`;

export const TitleText = styled.h2`
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

export const QuestionText = styled.p`
  margin: 20px 0;
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 1500px) {
    font-size: 0.9em;
  }

  @media (max-width: 650px) {
    font-size: 0.8em;
    margin: 15px 0;
  }

  @media (max-width: 400px) {
    font-size: 0.7em;
    margin: 10px 0;
  }
`;

export const QuestionBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px dashed #FFFF00;
  padding-top: 8px;
  margin-top: 16px;

  @media (max-width: 650px) {
    padding-top: 4px;
    margin-top: 8px;
  }

  @media (max-width: 400px) {
    padding-top: 2px;
    margin-top: 4px;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 650px) {
    gap: 10px;
  }

  @media (max-width: 400px) {
    gap: 5px;
  }
`;

export const StatsItem = styled.div`
  font-size: 0.8em;

  @media (max-width: 650px) {
    font-size: 0.7em;
  }

  @media (max-width: 400px) {
    font-size: 0.6em;
  }

  .stats-value {
    font-weight: bold;
    color: #fffb00;
  }

  i {
    color: #fffb00;
  }
`;

export const Flags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    gap: 5px;
  }

  @media (max-width: 400px) {
    gap: 2px;
  }
`;

export const FlagItem = styled.span`
  background-color: #333333;
  color: #00FFFF;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.7em;
  white-space: nowrap;

  @media (max-width: 650px) {
    padding: 2px 6px;
  }

  @media (max-width: 400px) {
    padding: 1px 4px;
  }
`;
