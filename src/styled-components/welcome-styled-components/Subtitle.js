import styled from 'styled-components';

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  margin: 20px 0 0 0;
  line-height: 1.4;
  word-break: break-word;
  width: 700px;

  @media (max-width: 1200px) {
    font-size: 1.25rem;
    width: 600px;
  }
  @media (max-width: 992px) {
    font-size: 1rem;
    width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
    width: 400px;
  }
  @media (max-width: 576px) {
    font-size: 0.75rem;
    width: 300px;
  }
`;
