import styled from 'styled-components';


const StatisticNumber = styled.h3`
  font-size: 2rem;
  color: #FFFF00;
  margin: 0;
  padding: 10px 0;

  &::before {
    content: "(";
  }
  &::after {
    content: ")";
  }

  @media (max-width: 1500px) {
    font-size: 1.8rem; 
  }

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media (max-width: 900px) {
    font-size: 1.4rem; 
  }

  @media (max-width: 600px) {
    font-size: 1.2rem; 
  }
`;
export { StatisticNumber };