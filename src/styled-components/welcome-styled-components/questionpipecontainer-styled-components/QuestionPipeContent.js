import styled from "styled-components";

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