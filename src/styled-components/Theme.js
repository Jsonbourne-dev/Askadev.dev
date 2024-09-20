import styled from 'styled-components';

const defaultTheme = {
  colors: {
    primary: '#00FFFF',
    background: '#000000',
    border: '#FFFF00',
    text: '#FFFFFF',
    answerItemBackground: '#333333',
    answerItemHighlight: '#555555',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '24px',
  },
};

export const Theme = styled.div`
  ${({ theme }) => `
    --primary-color: ${theme?.colors?.primary || defaultTheme.colors.primary};
    --background-color: ${theme?.colors?.background || defaultTheme.colors.background};
    --border-color: ${theme?.colors?.border || defaultTheme.colors.border};
    --text-color: ${theme?.colors?.text || defaultTheme.colors.text};
    --answer-item-background: ${theme?.colors?.answerItemBackground || defaultTheme.colors.answerItemBackground};
    --answer-item-highlight: ${theme?.colors?.answerItemHighlight || defaultTheme.colors.answerItemHighlight};
    --font-small: ${theme?.fontSizes?.small || defaultTheme.fontSizes.small};
    --font-medium: ${theme?.fontSizes?.medium || defaultTheme.fontSizes.medium};
    --font-large: ${theme?.fontSizes?.large || defaultTheme.fontSizes.large};
  `}
`;

export default Theme;
