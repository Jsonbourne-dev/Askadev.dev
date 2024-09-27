import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import AppBar from '../components/AppBar.jsx';
import QuestionsPanel from '../components/QuestionPanel.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import Footer from '../components/Footer.jsx';
import { Tooltip } from 'react-tooltip';


// Neon Colors
const neonYellow = '#FFFF00';
const neonBlue = '#00FFFF';
const darkGrey = '#333';

// Fuse.js options
const fuseOptions = {
  keys: ['title', 'questionText'],
  includeScore: true,
  threshold: 0.2,
  distance: 100,
};

// Styled Components
const CommunityPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; 
  background-color: #000;
  color: #fff;
  align-items: center;
`;

const QuestionPanelContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px 60px;
`;

const QuestionsContainer = styled.div`
  width: 100%;
  max-width: 1200px; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1; 
`;

const QuestionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px; 
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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
  const questions = useSelector(state => state.questions.questions);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Latest');
  const [modalVisible, setModalVisible] = useState(false);

  const fuse = useMemo(() => new Fuse(questions, fuseOptions), [questions]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  };

  const handleAskQuestionClick = () => {
    setModalVisible(true);
  };

  const filteredQuestions = useMemo(() => {
    let results = questions;

    if (searchQuery) {
      results = fuse.search(searchQuery).map((result) => result.item);
    }

    switch (selectedTab) {
      case 'Latest':
        results = results.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'Old':
        results = results.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Unanswered':
        results = results.filter((question) => question.answers === 0);
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

  return (
    <>
      <CommunityPageContainer>
        <AppBar onSearch={handleSearch} />
        {searchQuery === '' && (
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
                  answers={question.answers}
                  views={question.views}
                  code={question.code || ''}
                  DID={question.DID}
                />
              ))}
            </QuestionsSection>
          ) : (
            <NoQuestionsMessage>No questions found.</NoQuestionsMessage>
          )}
          {totalPages > 1 && (
            <PaginationContainer>
              <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationButton
                    key={index}
                    aria-label={`Go to page ${index + 1}`}
                    active={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    data-tip={`Page ${index + 1}`}
                    data-for={`pagination-tooltip-${index + 1}`}
                  >
                    {index + 1}
                    <ReactTooltip id={`pagination-tooltip-${index + 1}`} place="top" effect="solid" />
                  </PaginationButton>
                ))}
              </Pagination>
            </PaginationContainer>
          )}
        </QuestionsContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </CommunityPageContainer>
      {/* Modal Component Placeholder */}
      {/* {modalVisible && <AskQuestionModal onClose={() => setModalVisible(false)} />} */}
    </>
  );
};

export default Community;
