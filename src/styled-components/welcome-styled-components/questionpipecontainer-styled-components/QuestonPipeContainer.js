import styled from "styled-components";

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