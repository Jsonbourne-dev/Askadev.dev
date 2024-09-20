import styled from 'styled-components';

const ArrowPX = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  ${({ direction, width, color }) => {
    const size = `${width}px`;
    switch (direction) {
      case 'up':
        return `
          border-width: 0 ${size} ${size} ${size};
          border-color: transparent transparent ${color || '#00FFFF'} transparent;
        `;
      case 'down':
        return `
          border-width: ${size} ${size} 0 ${size};
          border-color: ${color || '#00FFFF'} transparent transparent transparent;
        `;
      case 'left':
        return `
          border-width: ${size} ${size} ${size} 0;
          border-color: transparent ${color || '#00FFFF'} transparent transparent;
        `;
      case 'right':
        return `
          border-width: ${size} 0 ${size} ${size};
          border-color: transparent transparent transparent ${color || '#00FFFF'};
        `;
      default:
        return '';
    }
  }}
  
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `
          top: 0;
          left: 0;
        `;
      case 'top-right':
        return `
          top: 0;
          right: 0;
        `;
      case 'bottom-left':
        return `
          bottom: 0;
          left: 0;
        `;
      case 'bottom-right':
        return `
          bottom: 0;
          right: 0;
        `;
      default:
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  }}
`;

export default ArrowPX;
