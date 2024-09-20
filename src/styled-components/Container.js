import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = '100%' }) => width};
  max-width: ${({ maxWidth = 'none' }) => maxWidth};
  background-color: ${({ backgroundColor = '#000000' }) => backgroundColor};
  color: ${({ color = '#00FFFF' }) => color};
  font-family: ${({ fontFamily = "'Courier New', Courier, monospace" }) => fontFamily};
  padding: ${({ padding = '20px' }) => padding};
  box-sizing: border-box;
  max-height: ${({ maxHeight = 'none' }) => maxHeight};
  border-top: ${({ borderTop, hasBorder = true }) => hasBorder ? borderTop || '4px solid #FFFF00' : 'none'};
  border-bottom: ${({ bottomBorderColor = '#FFFF00', hasBorder = true }) => hasBorder ? `4px solid ${bottomBorderColor}` : 'none'};
  border-left: ${({ borderLeft, hasBorder = true }) => hasBorder ? borderLeft || 'none' : 'none'};
  border-right: ${({ borderRight, hasBorder = true }) => hasBorder ? borderRight || 'none' : 'none'};
  margin: ${({ margin = '0' }) => margin};

  @media (max-width: 1000px) {
    padding: ${({ mobilePadding = '5px' }) => mobilePadding};
    font-size: ${({ mobileFontSize = '10px' }) => mobileFontSize};
  }
`;

export default Container;
