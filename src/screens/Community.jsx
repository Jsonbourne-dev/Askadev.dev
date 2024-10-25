import React from 'react';
import Footer from '../components/Footer';
import AppBar from '../components/Topappbar';
import { Container } from '../styled-components'; 
import styled from 'styled-components';
import QuestionTab from '../components/questiontab';
import QuestionCard from '../components/QuestionBox';

function Community() {
  return (
    <MainContainer>
      <AppBarContainer>
        <AppBar />
      </AppBarContainer>

      <ContentContainer>
        <Spacer size="20px" />
        <QuestionTab />
        <Spacer size="20px" />
        <QuestionCard />
        <Spacer size="20px" />
      </ContentContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainContainer>
  );
}

export default Community;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const AppBarContainer = styled.div`

`;

const ContentContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 

`;

const FooterContainer = styled.div`
`;

const Spacer = styled.div`
  height: ${(props) => props.size || '10px'};
`;
