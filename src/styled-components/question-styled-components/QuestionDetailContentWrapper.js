import styled from 'styled-components';

export const QuestionDetailGlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  background-color: #000000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const QuestionDetailContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #000000;
  border: 2px solid #FFFF00;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    max-width: 100%;
    height: auto;
  }
`;
