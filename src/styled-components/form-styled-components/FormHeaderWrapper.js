import styled from "styled-components";

const FormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

export default FormHeaderWrapper;
