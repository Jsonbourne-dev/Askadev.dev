import styled from "styled-components";

export const QuestionPipeFlags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  @media (max-width: 650px) {
    gap: 6px;
  }

  @media (max-width: 400px) {
    gap: 4px;
  }
`;
