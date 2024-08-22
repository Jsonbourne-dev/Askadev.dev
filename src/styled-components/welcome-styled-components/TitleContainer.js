import styled from 'styled-components';

const TitleContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 225px;
  text-align: left;

  @media (max-width: 1200px) {
    left: 150px;
    top: 200px;
  }
  @media (max-width: 992px) {
    left: 100px;
    top: 200px;
  }
  @media (max-width: 768px) {
    left: 50px;
    top: 200px;
  }
  @media (max-width: 576px) {
    left: 20px;
    top: 130px;
  }
`;

export { TitleContainer };