import styled from 'styled-components';

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

export { DashedLine };