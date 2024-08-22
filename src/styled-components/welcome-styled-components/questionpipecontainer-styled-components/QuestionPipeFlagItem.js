import styled from "styled-components";

export const QuestionPipeFlagItem = styled.span`
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: 1px solid #4A4A4A;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.6em;
  white-space: nowrap;

  @media (max-width: 650px) {
    padding: 4px 10px;
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    padding: 3px 8px;
    font-size: 0.4em;
  }
`;
