import styled from 'styled-components';


const StatisticText = styled.h4`
  font-size: 1.5rem;
  color: #00FFFF;
  margin: 15px 0;

  @media (max-width: 1500px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem; 
  }

  @media (max-width: 600px) {
    font-size: 0.9rem; 
  }
`;

export { StatisticText };