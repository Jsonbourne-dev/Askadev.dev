import styled from "styled-components";

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