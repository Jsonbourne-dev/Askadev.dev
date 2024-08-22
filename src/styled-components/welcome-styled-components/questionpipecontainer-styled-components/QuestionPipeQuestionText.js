import styled from "styled-components";

export const QuestionPipeQuestionText = styled.p`
  margin: 20px 0;
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 1500px) {
    font-size: 0.9em;
  }

  @media (max-width: 650px) {
    font-size: 0.7em;
    margin: 15px 0;
  }

  @media (max-width: 400px) {
    font-size: 0.5em;
    margin: 10px 0;
  }
`;