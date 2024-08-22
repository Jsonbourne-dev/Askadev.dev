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

export const QuestionDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  
  @media (max-width: 1000px) {
    padding: 0;
  }
`;
