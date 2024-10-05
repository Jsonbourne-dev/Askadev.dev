import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import AppBar from '../components/AppBar.jsx';
import QuestionsPanel from '../components/QuestionPanel.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import Footer from '../components/Footer.jsx';
import { updateQuestionViews } from '../redux/actions/questionsActions.js';
import { Button } from '../styled-components'; // Import the Button component

const neonYellow = '#FFFF00';
const neonBlue = '#00FFFF';

const fuseOptions = {
  keys: ['title', 'questionText'],
  includeScore: true,
  threshold: 0.2,
  distance: 100,
};

const CommunityPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  color: #fff;
  align-items: center;
`;

const CombinedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  border-left: 4px solid ${neonYellow};
  margin: 4px auto 0; 
  flex-grow: 1; 
  overflow-y: auto; 
  background-color: #000;
  direction: rtl; 
  
  & > * {
    direction: ltr; 
  }
`;

const QuestionPanelContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: calc(100% - 40px);
  max-width: 870px;
  padding: 20px;
  background-color: #000;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    margin-left: -8px;
    padding: 10px;
  }
`;

const QuestionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

const SearchMessageContainer = styled.div`
  max-width: 800px; 
  width: 100%;
  margin: 20px auto;
  padding: 15px;
  border: 2px solid ${neonYellow};
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between; /* Change to space-between to align items */
  align-items: center; /* Center items vertically */
`;

const SearchMessage = styled.div`
  color: ${neonBlue};
  font-size: 24px; 
  
  @media (max-width: 600px) {
    font-size: 20px; 
  }
`;

const SearchResultCount = styled.div`
  color: ${neonYellow};
  font-size: 18px; 
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  border: none;
  background-color: ${(props) => (props.active ? neonYellow : '#444')};
  color: ${(props) => (props.active ? '#000' : '#fff')};
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? neonYellow : '#555')};
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${neonYellow};
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  margin-top: auto;
`;

const NoQuestionsMessage = styled.div`
  color: #fff;
  font-size: 18px;
  margin-top: 50px;
`;

const Community = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Latest');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchActive, setSearchActive] = useState(false); // New state for search active

  const fuse = useMemo(() => new Fuse(questions, fuseOptions), [questions]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query ? query.toLowerCase() : '');
    setCurrentPage(1);
    setSearchActive(!!query); // Update searchActive based on the query
  };

  const handleAskQuestionClick = () => {
    setModalVisible(true);
  };

  const handleBackButtonClick = () => {
    setSearchQuery('');
    setSearchActive(false);
    setCurrentPage(1);
  };

  const filteredQuestions = useMemo(() => {
    let results = questions;

    if (searchQuery) {
      results = fuse.search(searchQuery).map((result) => result.item);
    }

    switch (selectedTab) {
      case 'Latest':
        results.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'Old':
        results.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Unanswered':
        results = results.filter((question) => question.answers.length === 0);
        break;
      case 'Bountied':
        results = results.filter((question) => question.flags.includes('Bounty'));
        break;
      default:
        break;
    }

    return results;
  }, [searchQuery, selectedTab, questions, fuse]);

  const QUESTIONS_PER_PAGE = 5;
  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const endIndex = startIndex + QUESTIONS_PER_PAGE;
  const currentQuestions = filteredQuestions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionClick = (did) => {
    dispatch(updateQuestionViews(did));
  };

  return (
    <CommunityPageContainer>
      <AppBar onSearch={handleSearchChange} />
      <CombinedContainer>
        {searchActive ? ( // Use searchActive state to conditionally render
          <SearchMessageContainer>
            <SearchMessage>Your search: "{searchQuery}"</SearchMessage>
            <SearchResultCount>Search results: ({filteredQuestions.length})</SearchResultCount>
            <Button onClick={handleBackButtonClick}>Back</Button> {/* Back button on the right */}
          </SearchMessageContainer>
        ) : (
          <QuestionPanelContainer>
            <QuestionsPanel onTabChange={handleTabChange} onAskQuestion={handleAskQuestionClick} />
          </QuestionPanelContainer>
        )}
        <QuestionsContainer>
          {currentQuestions.length > 0 ? (
            <QuestionsSection>
              {currentQuestions.map((question) => (
                <QuestionContainer
                  key={question.DID}
                  date={question.date}
                  title={question.title}
                  questionText={question.questionText}
                  flags={question.flags || []}
                  votes={question.votes}
                  answers={question.answers.length}
                  views={question.views}
                  code={question.code || ''}
                  DID={question.DID}
                  onClick={() => handleQuestionClick(question.DID)}
                />
              ))}
            </QuestionsSection>
          ) : (
            <NoQuestionsMessage>No questions found.</NoQuestionsMessage>
          )}
          {totalPages > 1 && (
            <PaginationContainer>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationButton
                  key={index}
                  aria-label={`Go to page ${index + 1}`}
                  active={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationButton>
              ))}
            </PaginationContainer>
          )}
        </QuestionsContainer>
      </CombinedContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </CommunityPageContainer>
  );
};

export default Community;
