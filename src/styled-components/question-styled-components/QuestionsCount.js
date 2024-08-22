import styled from 'styled-components';

export const QuestionsCount = styled.div`
  font-size: 16px;
  color: #FFFF00;
  text-shadow: 1px 1px 0 #000000;
  margin-right: 20px;
  white-space: nowrap;
  font-family: 'Press Start 2P', cursive;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
    margin-right: 15px;
  }

  @media (max-width: 900px) {
    font-size: 10px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
