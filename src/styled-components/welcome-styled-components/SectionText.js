import styled from 'styled-components';

const SectionText = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  margin-top: 8px;
  line-height: 1.4;

  @media (max-width: 1000px) {
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    max-width: 300px;
  }
`;

export { SectionText };