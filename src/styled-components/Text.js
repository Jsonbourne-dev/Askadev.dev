import styled from 'styled-components';

const Text = styled.p`
  font-family: ${({ noFont, sharp }) => 
    noFont ? 'Arial, sans-serif' : 
    sharp ? "'Impact', sans-serif" : 
    "'Press Start 2P', cursive"};
  
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color }) => color || '#000'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

  ${({ variant }) => {
    switch (variant) {
      case 'title':
        return `
          color: #FFFF00;
          font-size: 1.4rem; /* Smaller title size */
          font-weight: bold;
        `;
      case 'subtitle':
        return `
          color: #00FFFF;
          font-size: 1.2rem; /* Increased size for subtitles */
          font-weight: 600;
        `;
      default:
        return '';
    }
  }}
`;

export default Text;
