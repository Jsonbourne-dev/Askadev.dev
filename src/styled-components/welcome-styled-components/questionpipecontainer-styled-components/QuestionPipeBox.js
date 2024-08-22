import styled, { keyframes } from 'styled-components';


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


