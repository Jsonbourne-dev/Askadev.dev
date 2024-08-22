import styled from "styled-components";

export const QuestionPipeTitleText = styled.h2`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 650px) {
    font-size: 0.7em;
  }

  @media (max-width: 400px) {
    font-size: 0.6em;
  }
`;
