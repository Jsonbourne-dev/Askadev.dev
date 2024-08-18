import React, { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import AppBar from '../components/AppBar.jsx';
import QuestionsPanel from '../components/QuestionPanel.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import Footer from '../components/Footer.jsx';

const fuseOptions = {
  keys: ['title', 'questionText'],
  includeScore: true,
  threshold: 0.2,
  distance: 100,
};

const HARD_CODED_QUESTIONS = [
  {
    DID: 'DID-9DRYHPI903D',
    id: 1,
    date: "2024-07-25T00:00:00Z",
    title: "How to implement lazy loading in React?",
    questionText: "What is lazy loading in React, and how can it be implemented?",
    flags: ["React", "Lazy Loading"],
    votes: 20,
    answers: 0,
    views: 90
  },
  {
    DID: 'DID-1GJ5KZLQ8MD9',
    id: 2,
    date: "2024-07-26T00:00:00Z",
    title: "How to use React Router for navigation?",
    questionText: "Can someone explain how to use React Router for handling navigation in a React app?",
    flags: ["React", "React Router"],
    votes: 26,
    answers: 0,
    views: 0
  },
  {
    DID: 'DID-KL2N4PQ8X8E0',
    id: 3,
    date: "2024-08-01T00:00:00Z",
    title: "What is the purpose of useMemo in React?",
    questionText: "Can someone explain the purpose of the useMemo hook and provide an example of how it can be used?",
    flags: ["React", "useMemo"],
    votes: 15,
    answers: 1,
    views: 45
  },
  {
    DID: 'DID-Y6W8C3L9HJ0F',
    id: 4,
    date: "2024-08-03T00:00:00Z",
    title: "How can you manage state in a React app?",
    questionText: "What are the different ways to manage state in a React application, and when should you use each method?",
    flags: ["React", "State Management"],
    votes: 12,
    answers: 2,
    views: 60
  },
];

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Latest');
  const [questions, setQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));

    if (!storedQuestions) {
      localStorage.setItem('questions', JSON.stringify(HARD_CODED_QUESTIONS));
      setQuestions(HARD_CODED_QUESTIONS);
    } else {
      setQuestions(storedQuestions);
    }
  }, []);

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
    <CommunityPageContainer>
      <AppBar onSearch={handleSearch} />
      {searchQuery ? null : (
        <QuestionPanelContainer>
          <QuestionsPanel onTabChange={handleTabChange} onAskQuestion={handleAskQuestionClick} />
        </QuestionPanelContainer>
      )}
      <QuestionsContainer>
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
        {totalPages > 1 && (
          <PaginationContainer>
            <Pagination>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationButton
                  key={index}
                  aria-label={`Page ${index + 1}`}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
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
  );
};

// Styled Components
const CommunityPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  padding-top: 60px; // Adjusted to fit content properly
  align-items: center;
  overflow: hidden; // Prevent overflow
`;

const QuestionPanelContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 60px; // Adjusted to fit the layout properly
`;

const QuestionsContainer = styled.div`
  width: 100%;
  max-width: 1200px; // Adjusted width to fit the screen better
  padding-bottom: 60px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const QuestionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginationContainer = styled.div`
  position: relative; // Changed from absolute to relative
  bottom: 20px; // Adjusted to fit properly within the viewport
  display: flex;
  justify-content: center; // Centered pagination
  width: 100%;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center; // Center pagination buttons
  width: auto;
  padding: 0;
  box-sizing: border-box;
`;

const PaginationButton = styled.button`
  border: none;
  background-color: #444;
  color: #fff;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &.active {
    background-color: #007bff;
  }

  &:hover {
    background-color: #555;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  margin-top: 20px; // Adjusted to fit within the viewport
`;

export default Community;
