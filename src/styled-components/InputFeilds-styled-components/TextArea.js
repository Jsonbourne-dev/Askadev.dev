import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #00FFFF;
  border-radius: 5px;
  background-color: #000000;
  color: #00FFFF;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;

  @media (max-width: 1000px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export default Textarea;