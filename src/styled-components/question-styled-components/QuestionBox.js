import styled from 'styled-components';

const QuestionBox = styled.div`
  font-family: 'Press Start 2P', cursive;
  border: 4px solid #FFFF00;
  border-radius: 8px;
  padding: 1.5vw;
  margin: 1.5vw auto;
  box-shadow: 0 0 0 4px #333333;
  background-color: #000000;
  color: #00FFFF;
  position: relative;
  width: calc(100% - 3vw);
  max-width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(255, 255, 0, 0.7);
  }

  @media (min-width: 1000px) {
    font-size: 1.4em;
    padding: 2vw;
    margin: 2vw auto;
    width: calc(100% - 2vw);
  }

  @media (max-width: 900px) {
    width: calc(100% - 6vw);
    padding: 1vw;
    margin: 1vw auto;
    font-size: 0.8em;

    .question-box-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .title {
      font-size: 1em;
    }

    .date {
      font-size: 0.8em;
    }

    .stats {
      font-size: 0.8em;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .stats-item {
      margin-right: 0.5vw;
      font-size: 0.8em;
    }

    .flags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5vw;
    }

    .question-box-footer {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1vw;
    }
  }

  @media (max-width: 370px) {
    width: calc(100% - 12vw);
    margin: 0.5vw;
    padding: 0.5vw;
    font-size: 0.4em;

    .question-box-footer {
      display: none;
    }

    .question-text {
      font-size: 0.5em;
    }

    .title {
      font-size: 0.6em;
    }

    .stats-item {
      margin-right: 0.5vw;
      font-size: 0.4em;
    }

    .flags {
      gap: 0.3vw;
    }
  }
`;

export { QuestionBox };