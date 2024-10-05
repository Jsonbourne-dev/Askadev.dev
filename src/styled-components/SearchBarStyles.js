import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 100px; 
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 900px;
  background-color: #1a1a1a;
  border: 2px solid #ffff00;
  z-index: 9999;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Press Start 2P', cursive;
  transition: background-color 0.1s ease, border-color 0.1s ease;

  &:hover {
    background-color: #111;
    border-color: #ffcc00;
  }
`;

export const SearchInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #00ffff;
  outline: none;
  font-size: 16px;
  color: #00ffff;
  background-color: #1a1a1a;
  width: 100%;
  border-radius: 0;
  transition: border-color 0.1s ease, background-color 0.1s ease;

  &::placeholder {
    color: #00ffff;
  }

  &:focus {
    border-color: #ffcc00;
    background-color: #111;
  }
`;

export const FlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
  transition: all 0.1s ease;
  
  .flag {
    cursor: pointer;
    padding: 6px 12px;
    border: 2px solid white;
    background-color: #1a1a1a;
    color: #00ffff;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: border-color 0.1s ease, background-color 0.1s ease, transform 0.1s ease;

    &:hover {
      border-color: #00ffff;
      transform: scale(1.02);
    }

    &.selected {
      border-color: #ffff00;
      background-color: #222222;
    }

    img {
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }
`;
