
import styled from 'styled-components';

export const QuestionsPanelContainer = styled.div`
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
