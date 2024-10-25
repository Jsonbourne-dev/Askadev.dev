import styled from 'styled-components';
import { Container } from '../styled-components';

const Line = styled(Container)`
  height: 1px;
  width: ${({ width }) => width || '100%'};
  background-color: ${({ color }) => color || 'black'};
  position: relative;
`;

export default Line;
