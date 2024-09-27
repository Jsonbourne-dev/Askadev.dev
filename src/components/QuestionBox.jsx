import React from 'react';
import styled from 'styled-components';

const DashedLine = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #FFFF00;
  margin: 4px 0;
`;

const ContainerWrapper = styled.div`
  width: calc(95vw - 2rem); /* Use calc to maintain padding from the edges */
  max-width: 900px;
  max-height: 80vh;
  overflow: hidden;
  margin: 1vw auto;
  padding: 1.5vw;
  background-color: #000000;
  color: #00FFFF;
  border: 3px solid #FFFF00;
  border-radius: 6px;
  box-shadow: 0 0 0 3px #333333;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 2vw; /* Added padding for content */

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.7);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const DateText = styled.div`
  flex-shrink: 0;
  margin-right: 10px;
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TitleText = styled.p`
  color: #FFFF00;
  font-size: ${props => props.fontSize || 'clamp(0.5em, 1.5vw, 1.2em)'};
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4px;
  flex-wrap: wrap;
  gap: 4px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Increased gap for a cooler layout */
  justify-content: flex-end;
`;

const Text = styled.p`
  color: ${props => props.color || '#00FFFF'};
  font-size: ${props => props.fontSize || 'clamp(0.3em, 1.5vw, 1em)'};
  font-weight: ${props => props.fontWeight || 'normal'};
  margin: ${props => props.margin || '0'};
  overflow: ${props => props.overflow || 'visible'};
  text-overflow: ${props => props.textOverflow || 'clip'};
  white-space: ${props => props.whiteSpace || 'normal'};
`;

const FlagTag = styled.div`
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: 1px solid #4A4A4A;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: ${props => props.fontSize || 'clamp(0.3em, 1.5vw, 1em)'};
  box-shadow: 0 0 5px rgba(255, 255, 0, 0.5); /* Added shadow for a cooler effect */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const getResponsiveFontSize = (baseSize, minScale, maxScale) => {
  return `clamp(${baseSize}, ${minScale}vw, ${maxScale})`;
}

const QuestionBox = ({ date, title, flags = [], votes, answers = [], views, onClick }) => {
  return (
    <ContainerWrapper onClick={onClick}>
      <ContentWrapper>
        <HeaderWrapper>
          <DateText>
            <Text color="#666666" fontSize={getResponsiveFontSize('0.3em', 0.5, '0.8em')}>
              {new Date(date).toLocaleDateString()}
            </Text>
          </DateText>
          <TitleWrapper>
            <TitleText fontSize={getResponsiveFontSize('0.5em', 1, '1.2em')}>
              {title}
            </TitleText>
          </TitleWrapper>
        </HeaderWrapper>

        <DashedLine />

        <StatsWrapper>
          <Text color="#FFFF00" fontSize={getResponsiveFontSize('0.3em', 0.5, '1em')} display="flex" alignItems="center">
            <i className="fas fa-thumbs-up" style={{ marginRight: '2px', color: '#00FFFF' }}></i>
            <span style={{ color: '#00FFFF' }}>{votes}</span> votes
          </Text>
          <Text color="#FFFF00" fontSize={getResponsiveFontSize('0.3em', 0.5, '1em')} display="flex" alignItems="center">
            <i className="fas fa-reply" style={{ marginRight: '2px', color: '#00FFFF' }}></i>
            <span style={{ color: '#00FFFF' }}>{answers.length || 0}</span> answers
          </Text>
          <Text color="#FFFF00" fontSize={getResponsiveFontSize('0.3em', 0.5, '1em')} display="flex" alignItems="center">
            <i className="fas fa-eye" style={{ marginRight: '2px', color: '#00FFFF' }}></i>
            <span style={{ color: '#00FFFF' }}>{views}</span> views
          </Text>
        </StatsWrapper>

        <TagsWrapper>
          {flags.slice(0, 4).map((flag, index) => (
            <FlagTag key={index} fontSize={getResponsiveFontSize('0.3em', 0.5, '1em')}>
              #{flag}
            </FlagTag>
          ))}
        </TagsWrapper>
      </ContentWrapper>
    </ContainerWrapper>
  );
};

export default QuestionBox;
