import styled from 'styled-components';

const AppbarButton = styled.button`
  background: transparent;
  border: none;
  color: #00ffff;
  font-family: 'Press Start 2P', Courier, monospace;
  font-size: 14px; 
  cursor: pointer;
  position: relative;
  padding: 8px 16px; 
  display: inline-block;
  text-align: center;
  margin-left: ${({ marginLeft }) => marginLeft || 'auto'};
  transition: color 0.3s ease;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #FFFF00;
    left: 0;
    bottom: -6px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ onPage }) => (onPage ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: right;
  }

  &:hover:after {
    transform: ${({ onPage }) => (onPage ? 'scaleX(1)' : 'scaleX(1)')};
    transform-origin: left;
  }

  &:hover {
    color: #00e6e6;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export default AppbarButton;
