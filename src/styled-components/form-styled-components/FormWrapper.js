import styled from "styled-components";

const FormWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #1a1a1a;
  border: 2px solid #00FFFF;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 1000px) {
    padding: 10px;
    box-shadow: none;
    max-height: 100vh;
    border-radius: 0;
    border-width: 1px;
  }
`;

export default FormWrapper;
