import styled from 'styled-components';

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

export { StatisticItem };