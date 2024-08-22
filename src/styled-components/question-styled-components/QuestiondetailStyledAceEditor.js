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

export const QuestionDetailStyledAceEditor = styled(AceEditor)`
  width: 100% !important;
  border: none;
  box-sizing: border-box;
  border-radius: 0;
`;
