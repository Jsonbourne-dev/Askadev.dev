import styled from 'styled-components';

const FooterContact = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #00FFFF;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export { FooterContact };