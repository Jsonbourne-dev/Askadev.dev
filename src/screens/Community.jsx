// Community.jsx
import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import AppBar from '../components/AppBar.jsx';
import QuestionsPanel from '../components/QuestionPanel.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import Modal from '../components/Modal.jsx';
import '../components/components_css/Modal.css';
import '../screens_css/Community.css';
import Footer from '../components/Footer.jsx';

const questions = [
  {
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
    id: 3,
    date: "2024-07-27T00:00:00Z",
    title: "How to manage application state in React?",
    questionText: "What are some recommended methods for managing application state in React?",
    flags: ["React", "State Management"],
    votes: 22,
    answers: 0,
    views: 0
  },
  {
    id: 4,
    date: "2024-07-28T00:00:00Z",
    title: "What is the use of React Context API?",
    questionText: "Can someone explain the use of React Context API and how to use it effectively?",
    flags: ["React", "Context API"],
    votes: 30,
    answers: 10,
    views: 160
  },
  {
    id: 5,
    date: "2024-07-29T00:00:00Z",
    title: "How to optimize performance in a React app?",
    questionText: "What are the best practices for optimizing performance in a React application?",
    flags: ["React", "Performance"],
    votes: 18,
    answers: 4,
    views: 85
  },
  {
    id: 6,
    date: "2024-07-30T00:00:00Z",
    title: "Understanding the Virtual DOM in React",
    questionText: "Can someone explain the concept of Virtual DOM in React?",
    flags: ["React", "Virtual DOM"],
    votes: 15,
    answers: 6,
    views: 110
  },
  {
    id: 7,
    date: "2024-07-31T00:00:00Z",
    title: "Handling form inputs in React",
    questionText: "What is the best way to handle form inputs in React?",
    flags: ["React", "Forms"],
    votes: 12,
    answers: 3,
    views: 75
  },
  {
    id: 8,
    date: "2024-08-01T00:00:00Z",
    title: "What are hooks in React?",
    questionText: "Can someone explain what hooks are in React and how to use them?",
    flags: ["React", "Hooks"],
    votes: 25,
    answers: 9,
    views: 145
  },
  {
    id: 9,
    date: "2024-08-02T00:00:00Z",
    title: "How to use the useEffect hook in React?",
    questionText: "How does the useEffect hook work in React, and what are some common use cases?",
    flags: ["React", "Hooks", "useEffect"],
    votes: 28,
    answers: 11,
    views: 170
  },
  {
    id: 10,
    date: "2024-08-03T00:00:00Z",
    title: "React component lifecycle",
    questionText: "Can someone explain the lifecycle of a React component?",
    flags: ["React", "Lifecycle"],
    votes: 17,
    answers: 4,
    views: 95
  },
  {
    id: 11,
    date: "2024-08-04T00:00:00Z",
    title: "State vs Props in React",
    questionText: "What is the difference between state and props in React?",
    flags: ["React", "State", "Props"],
    votes: 13,
    answers: 2,
    views: 60
  },
  {
    id: 12,
    date: "2024-08-05T00:00:00Z",
    title: "What is JSX in React?",
    questionText: "Can someone explain what JSX is and how it is used in React?",
    flags: ["React", "JSX"],
    votes: 21,
    answers: 7,
    views: 130
  },
  {
    id: 13,
    date: "2024-08-06T00:00:00Z",
    title: "React and TypeScript",
    questionText: "How can I use TypeScript with React?",
    flags: ["React", "TypeScript"],
    votes: 10,
    answers: 1,
    views: 50
  },
  {
    id: 14,
    date: "2024-08-07T00:00:00Z",
    title: "How to test React components?",
    questionText: "What are the best practices for testing React components?",
    flags: ["React", "Testing"],
    votes: 19,
    answers: 5,
    views: 100
  },
  {
    id: 15,
    date: "2024-08-08T00:00:00Z",
    title: "Handling events in React",
    questionText: "How can I handle events in React?",
    flags: ["React", "Events"],
    votes: 16,
    answers: 4,
    views: 80
  },
  {
    id: 16,
    date: "2024-08-09T00:00:00Z",
    title: "What are higher-order components in React?",
    questionText: "Can someone explain higher-order components in React?",
    flags: ["React", "Higher-Order Components"],
    votes: 24,
    answers: 8,
    views: 150
  },
  {
    id: 17,
    date: "2024-08-10T00:00:00Z",
    title: "React and Redux",
    questionText: "How does Redux work with React?",
    flags: ["React", "Redux"],
    votes: 27,
    answers: 9,
    views: 0
  },
  {
    id: 18,
    date: "2024-08-11T00:00:00Z",
    title: "How to handle errors in React?",
    questionText: "What are some common methods for handling errors in React?",
    flags: ["React", "Error Handling"],
    votes: 11,
    answers: 3,
    views: 55
  },
  {
    id: 19,
    date: "2024-08-12T00:00:00Z",
    title: "What is server-side rendering in React?",
    questionText: "Can someone explain server-side rendering and how to implement it in React?",
    flags: ["React", "SSR"],
    votes: 20,
    answers: 6,
    views: 120
  },
];
const fuse = new Fuse(questions, {
  keys: ['title', 'questionText'],
  includeScore: true,
  threshold: 0.3,
});

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Latest');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleAskQuestionClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
  }, [searchQuery, selectedTab]);

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
    <div className="community-page-container">
      <AppBar onSearch={handleSearch} />
      <div className="question-panel-container">
        <QuestionsPanel onTabChange={handleTabChange} onAskQuestion={handleAskQuestionClick} />
      </div>
      <div className="questions-container">
        <div className="questions-section">
          {currentQuestions.map((question) => (
            <QuestionContainer
              key={question.id}
              date={question.date}
              title={question.title}
              questionText={question.questionText}
              flags={question.flags}
              votes={question.votes}
              answers={question.answers}
              views={question.views}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination-container">
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  aria-label={`Page ${index + 1}`}
                  className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="footer-container">
        <Footer />
      </div>
   {/*   {isModalVisible && <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <h2>Ask a Question</h2>
        <p>Form to ask a question goes here...</p>
       </Modal>} */}
    </div>
  );
};

export default Community;