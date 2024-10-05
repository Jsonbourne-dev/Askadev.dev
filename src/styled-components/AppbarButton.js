import styled from 'styled-components';

const AppbarButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ isActive }) => (isActive ? '#FFFF00' : '#00ffff')}; // Highlight active button
  font-family: 'Press Start 2P', Courier, monospace;
  font-size: 14px; 
  cursor: pointer;
  padding: 10px 20px; 
  display: inline-block;
  text-align: center;
  margin-left: ${({ marginLeft }) => marginLeft || 'auto'};
  transition: color 0.3s ease, transform 0.3s ease; // Added transform for hover effect
  text-decoration: none; // Remove underline

  // Style for active button
  ${({ isActive }) =>
    isActive &&
    `
      transform: scale(1.1); // Slightly scale active button
      color: #FFFF00; // Bright color for active button
  `}

  &:hover {
    color: #00e6e6; // Hover color
    transform: scale(1.05); // Scale effect on hover
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export default AppbarButton;
