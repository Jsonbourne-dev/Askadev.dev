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

const StatisticItem = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #111111;
  border: 3px solid #00FFFF;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 5px rgba(0, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1500px) {
    width: 300px;
    padding: 20px;
    border-radius: 15px;
  }

  @media (max-width: 1200px) {
    width: 250px; 
    padding: 15px; 
    border-radius: 10px; 
  }

  @media (max-width: 900px) {
    width: 200px;
    padding: 10px; 
    border-radius: 8px; 
  }

  @media (max-width: 600px) {
    width: 150px; 
    padding: 8px;
    border-radius: 6px; 
  }
`;

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

const DashedLine = styled.div`
  width: 80%;
  height: 1px;
  background-color: transparent;
  border-bottom: 2px dashed #FFFF00;
  margin: 15px 0;

  @media (max-width: 1500px) {
    margin: 10px 0;
  }

  @media (max-width: 1200px) {
    margin: 8px 0; 
  }

  @media (max-width: 900px) {
    margin: 6px 0;
  }

  @media (max-width: 600px) {
    margin: 4px 0; 
  }
`;

export {
  StatisticsContainer,
  StatisticItem,
  StatisticNumber,
  StatisticText,
  DashedLine
};
