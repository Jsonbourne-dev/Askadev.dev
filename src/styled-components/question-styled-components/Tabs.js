import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid #00FFFF;
  border-radius: 5px;
  background: linear-gradient(145deg, #333333, #000000);
  overflow: hidden;
  max-width: 600px;

  @media (max-width: 900px) {
    height: 30px;
    max-width: 100%;
  }
`;
