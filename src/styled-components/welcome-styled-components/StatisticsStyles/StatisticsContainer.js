import styled from 'styled-components';

const StatisticsContainer = styled.div`
  position: relative;
  width: 70%;
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center; 
  gap: 50px; 

  @media (max-width: 1500px) {
    width: 90%; 
    flex-direction: column; 
    gap: 30px; 
  }
`;

export { StatisticsContainer };