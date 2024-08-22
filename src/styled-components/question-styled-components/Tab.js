import styled from 'styled-components';


export const Tab = styled.div`
  flex: 1;
  padding: 6px;
  color: #00FFFF;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-right: 1px solid #00FFFF;
  font-size: 12px;
  font-family: 'Press Start 2P', cursive;

  &:last-child {
    border-right: none;
  }

  &.selected {
    background-color: #00FFFF;
    color: #000000;
    font-weight: bold;
  }

  &:hover {
    background-color: #00C7B6;
  }

  @media (max-width: 1000px) {
    border-right: none;
    border-bottom: 1px solid #00FFFF;
  }

  @media (max-width: 900px) {
    font-size: 10px;
    padding: 4px;
  }

  @media (max-width: 600px) {
    font-size: 8px;
    padding: 2px;
  }
`;
