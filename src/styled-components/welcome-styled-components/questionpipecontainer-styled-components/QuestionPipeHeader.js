import styled from "styled-components";

export const QuestionPipeHeader = styled.div`
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