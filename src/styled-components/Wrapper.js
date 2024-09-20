import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  border: ${({ border = 'none' }) => border};
  border-radius: ${({ borderRadius = '0' }) => borderRadius};
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  color: ${({ color = 'inherit' }) => color};
  box-shadow: ${({ boxShadow = 'none' }) => boxShadow};
  display: ${({ display = 'block' }) => display};
  overflow: ${({ overflow = 'visible' }) => overflow};
  box-sizing: border-box;
  position: ${({ position = 'static' }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  gap: ${({ gap = '0' }) => gap};
  resize: ${({ resize = 'none' }) => resize};
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-size: ${({ bgSize }) => bgSize || 'auto'};
  background-position: ${({ bgPosition }) => bgPosition || 'initial'};
  z-index: ${({ zIndex = 'auto' }) => zIndex};

  ${({ hasBottomBorder, bottomBorderColor }) =>
    hasBottomBorder &&
    `border-bottom: 3px solid ${bottomBorderColor || 'transparent'};`}

  ${({ zIndexContent }) =>
    zIndexContent === 0 &&
    `
      & > * {
        position: relative;
        z-index: 0;
      }
    `}

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export default Wrapper;
