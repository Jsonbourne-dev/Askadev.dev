import styled, { keyframes } from 'styled-components';


export const UserPipeContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 1300px;
  height: 40vh;
  max-height: 430px;
  background-color: #000000;
  border-top: 10px solid #fffb00;
  border-bottom: 10px solid #fffb00;
  border-left: 0;
  border-right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-sizing: border-box;
  transition: width 0.3s, height 0.3s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: #000000;
    z-index: 2;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    height: 30vh;
    max-height: 300px;
    border-top: 8px solid #fffb00;
    border-bottom: 8px solid #fffb00;

    &::before,
    &::after {
      width: 8px;
    }
  }

  @media (max-width: 600px) {
    width: 95vw;
    height: 20vh;
    max-height: 200px;
    border-top: 6px solid #fffb00;
    border-bottom: 6px solid #fffb00;

    &::before,
    &::after {
      width: 6px;
    }
  }
`;