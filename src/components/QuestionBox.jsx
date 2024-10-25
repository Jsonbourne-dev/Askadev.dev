import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  fontSizes: {
    desktop: {
      xlarge: '36px',
      large: '30px',
      medium: '24px',
      small: '20px',
      xsmall: '14px',
    },
    phone: {
      xlarge: '28px',
      large: '24px',
      medium: '20px',
      small: '16px',
      xsmall: '14px',
    },
  },
  gaps: {
    desktop: {
      large: '20px',
      medium: '15px',
      small: '10px',
    },
    phone: {
      large: '15px',
      medium: '10px',
      small: '5px',
    },
  },
  fontWeights: {
    thin: '300',
    normal: '400',
    bold: '700',
    extraBold: '900',
  },
  fonts: {
    thin: "'Roboto Thin', sans-serif",
    regular: "'Roboto', sans-serif",
    bold: "'Roboto Bold', sans-serif",
    extraBold: "'Roboto ExtraBold', sans-serif",
  },
  colors: {
    primary: '#BEE239',
    text: 'black',
  },
  screenSizes: {
    desktop: '800px',
    phone: '600px',
  },
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const formatTimeAgo = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const diffInMilliseconds = now - createdDate;

  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
};

const QuestionCard = () => {
  const questions = useSelector((state) => state.questions.questions);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {questions.map((questionData, index) => (
          <React.Fragment key={index}>
            <CardContainer>
              <ContentContainer>
                <LeftSection>
                  <StatsContainer>
                    <Stat>
                      <StatNumber>{questionData.views}</StatNumber>
                      <StatLabel>Views</StatLabel>
                    </Stat>
                    <Stat>
                      <StatNumber>{questionData.votes}</StatNumber>
                      <StatLabel>Votes</StatLabel>
                    </Stat>
                    <Stat>
                      <StatNumber>{questionData.answers}</StatNumber>
                      <StatLabel>Answers</StatLabel>
                    </Stat>
                  </StatsContainer>
                </LeftSection>
                <MiddleSection>
                  <Title>{truncateText(questionData.title, 60)}</Title>
                  <Subtitle>{truncateText(questionData.subtitle, 100)}</Subtitle>
                  <Question>{questionData.question}</Question>
                  <Flags>
                    {questionData.flags?.map((flag, index) => (
                      <FlagBox key={index}>{flag}</FlagBox>
                    ))}
                  </Flags>
                </MiddleSection>
                <RightSection>
                  <UserTimeContainer>
                    <Time>{formatTimeAgo(questionData.createdAt)}</Time>
                    <Spacer />
                    <UserBox>
                      <User>{questionData.username}</User>
                    </UserBox>
                  </UserTimeContainer>
                </RightSection>

              </ContentContainer>
            </CardContainer>
            {index < questions.length - 1 && <LineSpacer />}
          </React.Fragment>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default QuestionCard;


const Container = styled.div`
  padding: 0 70px;
  width: 100vw;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.screenSizes.desktop}) {
    padding: 0 20px;
  }
`;

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: ${({ theme }) => theme.gaps.desktop.medium};
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    padding: ${({ theme }) => theme.gaps.phone.medium};
    margin: 10px 0;
  }
`;

const LineSpacer = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 10px 0;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 200px;
  margin-right: -40px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
    height: auto;
  }
`;

const MiddleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: -30px;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.extraBold};
  font-size: ${({ theme }) => theme.fontSizes.desktop.large};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.xlarge};
  }
`;

const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.thin};
  font-size: ${({ theme }) => theme.fontSizes.desktop.medium};
  margin: 5px 0 10px;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.medium};
  }
`;

const Question = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.desktop.medium};
  margin: -1px 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.medium};
  }
`;

const Flags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.desktop.small};
  margin-top: 35px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    display: none;
  }
`;

const FlagBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 15px;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.desktop.small};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.medium};
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.gaps.desktop.small};
  padding: ${({ theme }) => theme.gaps.desktop.small};
  border-radius: 8px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    padding: ${({ theme }) => theme.gaps.phone.small};
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.medium};
  }
`;

const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.extraBold};
  font-size: ${({ theme }) => theme.fontSizes.desktop.large};
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.large};
  }
`;

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.desktop.medium};

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.medium};
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    align-items: flex-start;
    margin-top: auto;
  }
`;

const UserTimeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  font-family: ${({ theme }) => theme.fonts.thin};
  font-size: ${({ theme }) => theme.fontSizes.desktop.small};
  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.small};
  }
`;

const Spacer = styled.div`
  width: 10px;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};  /* Sets background color */
  padding: 8px 15px;  /* Adds some padding for better spacing */
  border-radius: 5px;  /* Optional, adds rounded corners */
  color: white;  /* Text color */
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.desktop.small};

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.phone.small};
  }
`;


const User = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
