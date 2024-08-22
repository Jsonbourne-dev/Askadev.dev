import styled from 'styled-components';

export const QuestionsTitle = styled.div`
  font-size: 16px;
  color: #00FFFF;
  text-shadow: 2px 2px 0 #000000;
  flex-grow: 1;
  margin-right: 20px;
  white-space: nowrap;
  overflow: visible;
  text-overflow: clip;

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
