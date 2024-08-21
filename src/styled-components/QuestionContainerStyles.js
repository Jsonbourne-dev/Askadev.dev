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

const QuestionBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed #FFFF00;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

const DateText = styled.span`
  color: #666666;
  font-size: 0.6em;
`;

const TitleText = styled.h2`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const QuestionText = styled.p`
  margin: 20px 0;
  font-size: 1em;
  line-height: 1.6;
`;

const QuestionBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StatsItem = styled.span`
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
`;

const Flags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FlagItem = styled.span`
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: 1px solid #4A4A4A;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.6em;
  white-space: nowrap;
`;

export default QuestionBox;
export {
  QuestionBoxHeader,
  DateText,
  TitleText,
  QuestionText,
  QuestionBoxFooter,
  Stats,
  StatsItem,
  Flags,
  FlagItem
};
