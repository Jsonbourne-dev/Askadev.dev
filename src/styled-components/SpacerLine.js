import styled from 'styled-components';

const SpacerLine = styled.hr`
  border: none;
  border-top: 1px solid ${({ color, theme }) => color || theme.colors.spacerLine}; 
  margin: ${({ fullWidth, theme }) => (fullWidth ? '0' : `${theme.gaps.desktop.medium} 50px`)} 0;
`;

export default SpacerLine;
