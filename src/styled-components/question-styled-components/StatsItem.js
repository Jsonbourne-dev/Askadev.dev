import styled from 'styled-components';

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

export { StatsItem };