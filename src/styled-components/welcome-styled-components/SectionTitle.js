import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.75rem;
  margin: 0;
  color: #FFFF00;
  word-break: break-word;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    max-width: 300px;
  }
`;

export { SectionTitle };