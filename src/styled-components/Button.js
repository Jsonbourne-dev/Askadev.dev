import styled from "styled-components";

const Button = styled.button`
  background: #FFFF00;
  border: 4px solid #e1b91e;
  border-radius: 6px;
  color: #000000;
  padding: 12px 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 6px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);
  display: inline-block;
  margin-top: 10px;

  &:active {
    background: #e1b91e;
    border-color: #d0a10d;
    box-shadow: 0 2px 0 #d0a10d, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }

  @media (max-width: 1000px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export default Button;
