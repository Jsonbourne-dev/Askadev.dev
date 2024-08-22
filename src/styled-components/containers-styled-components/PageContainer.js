import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
  color: #00FFFF;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 10px;
  }
`;

export default PageContainer;
