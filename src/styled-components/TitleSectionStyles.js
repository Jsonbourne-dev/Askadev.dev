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

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  letter-spacing: 2px;
  color: #00FFFF;
  margin: 0;
  line-height: 1.2;
  word-break: break-word;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 992px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  margin: 20px 0 0 0;
  line-height: 1.4;
  word-break: break-word;
  width: 700px;

  @media (max-width: 1200px) {
    font-size: 1.25rem;
    width: 600px;
  }
  @media (max-width: 992px) {
    font-size: 1rem;
    width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
    width: 400px;
  }
  @media (max-width: 576px) {
    font-size: 0.75rem;
    width: 300px;
  }
`;

const HighlightedText = styled.span`
  color: #FFFF00;
  text-transform: uppercase;
  font-family: 'Press Start 2P', cursive;
`;

export {
  TitleContainer,
  Title,
  Subtitle,
  HighlightedText
};
