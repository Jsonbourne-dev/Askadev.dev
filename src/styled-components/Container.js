import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ color }) => color || 'transparent'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  display: ${({ display }) => display || 'block'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  position: ${({ position }) => position || 'static'};
  overflow: ${({ overflow }) => overflow || 'visible'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export default Container;
