import styled from 'styled-components';

export const TabsAndCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
    padding: 0 10px;
  }
`;
