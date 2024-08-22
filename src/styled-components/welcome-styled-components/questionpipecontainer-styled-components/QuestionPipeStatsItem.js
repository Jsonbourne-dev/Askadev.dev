import styled from "styled-components";

export const QuestionPipeStatsItem = styled.span`
  margin-right: 12px;
  font-size: 0.6em;
  color: #FFFF00;

  i {
    margin-right: 4px;
    color: #00FFFF;
  }

  &::before {
    content: '(';
    color: #00FFFF;
  }

  &::after {
    content: ')';
    color: #00FFFF;
  }

  .stats-value {
    color: #00FFFF;
  }

  @media (max-width: 650px) {
    font-size: 0.5em;
  }

  @media (max-width: 400px) {
    font-size: 0.4em;
  }
`;
