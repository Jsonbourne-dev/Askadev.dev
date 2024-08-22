import styled from "styled-components";

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