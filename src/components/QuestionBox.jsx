import React from 'react';
import styled from 'styled-components';

const DashedLine = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #FFFF00;
  margin: 8px 0;
`;

const ContainerWrapper = styled.div`
  width: calc(90vw - 2rem);
  max-width: 850px;
  max-height: 80vh;
  overflow: hidden;
  margin: 20px auto;
  padding: 2vw;
  background-color: #000000;
  color: #00FFFF;
  border: 3px solid #FFFF00;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
  margin-bottom: 8px;
`;

const DateText = styled.div`
  flex-shrink: 0;
  margin-right: 12px;
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TitleText = styled.p`
  color: #FFFF00;
  font-size: ${props => props.fontSize || 'clamp(0.4em, 1.5vw, 1em)'}; /* Responsive title size */
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
  margin-top: 12px;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`;

const Text = styled.p`
  color: ${props => props.color || '#00FFFF'};
  font-size: ${props => props.fontSize || 'clamp(0.3em, 0.8vw, 0.7em)'}; /* Reduced size */
  font-weight: ${props => props.fontWeight || 'normal'};
  margin: ${props => props.margin || '0'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Prevents overlap and ensures ellipsis */
`;

const FlagTag = styled.div`
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: 1px solid #4A4A4A;
  border-radius: 10px;
  padding: 4px 8px;
  font-size: ${props => props.fontSize || 'clamp(0.3em, 0.7vw, 0.6em)'}; /* Small and responsive */
`;

const getResponsiveFontSize = (baseSize, minScale, maxScale) => {
  return `clamp(${baseSize}, ${minScale}vw, ${maxScale})`;
};

const QuestionBox = ({ date, title, flags = [], votes, answers = [], views, onClick }) => {
  return (
    <ContainerWrapper onClick={onClick}>
      <ContentWrapper>
        <HeaderWrapper>
          <DateText>
            <Text color="#666666" fontSize={getResponsiveFontSize('0.3em', 0.4, '0.6em')}>
              {new Date(date).toLocaleDateString()}
            </Text>
          </DateText>
          <TitleWrapper>
            <TitleText fontSize={getResponsiveFontSize('0.5em', 1, '1.5em')}> {/* Adjusted for larger screens */}
              {title}
            </TitleText>
          </TitleWrapper>
        </HeaderWrapper>

        <DashedLine />

        <StatsWrapper>
          <Text color="#FFFF00" fontSize={getResponsiveFontSize('0.3em', 0.5, '0.7em')}>
            <i className="fas fa-thumbs-up" style={{ marginRight: '4px', color: '#00FFFF' }}></i>
            <span style={{ color: '#00FFFF' }}>{votes}</span> votes
          </Text>
          <Text color="#FFFF00" fontSize={getResponsiveFontSize('0.3em', 0.5, '0.7em')}>
            <i className="fas fa-reply" style={{ marginRight: '4px', color: '#00FFFF' }}></i>
            <span style={{ color: '#00FFFF' }}>{answers.length || 0}</span> answers
          </Text>
          <Text color="#FFFF00" fontSize={getResponsiveFontSize('0.3em', 0.5, '0.7em')}>
            <i className="fas fa-eye" style={{ marginRight: '4px', color: '#00FFFF' }}></i>
            <span style={{ color: '#00FFFF' }}>{views}</span> views
          </Text>
        </StatsWrapper>

        <TagsWrapper>
          {flags.slice(0, 4).map((flag, index) => (
            <FlagTag key={index} fontSize={getResponsiveFontSize('0.3em', 0.5, '0.6em')}>
              #{flag}
            </FlagTag>
          ))}
        </TagsWrapper>
      </ContentWrapper>
    </ContainerWrapper>
  );
};

export default QuestionBox;
