
import styled from 'styled-components';


export const HeaderAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 2px solid #00FFFF;
  padding-bottom: 10px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    margin-bottom: 15px;
  }
`;
