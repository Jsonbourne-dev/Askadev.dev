import styled from 'styled-components';

const SectionContainer = styled.div`
  position: absolute;
  width: 600px;
  background-color: #000000;
  border: 2px solid #FFFF00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
  color: #00FFFF;
  z-index: 3;
  box-sizing: border-box;

  left: ${props => props.position === 'left' ? '225px' : 'auto'};
  right: ${props => props.position === 'right' ? '225px' : 'auto'};
  top: ${props => props.top}px;

  @media (max-width: 1000px) {
    width: 70%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 10px;
  }

  @media (max-width: 576px) {
    width: 90%;
    padding: 5px;
    max-width: 300px;
  }
`;
export { SectionContainer };