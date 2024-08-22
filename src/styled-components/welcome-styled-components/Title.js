import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  letter-spacing: 2px;
  color: #00FFFF;
  margin: 0;
  line-height: 1.2;
  word-break: break-word;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 992px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
