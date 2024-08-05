import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components_css/QuestionContainer.css';

const QuestionContainer = ({ date, title, questionText, flags = [], votes, answers, views, code, DID }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Increment view count in localStorage
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    const updatedQuestions = questions.map(q => {
      if (q.DID === DID) {
        return { ...q, views: q.views + 1 };
      }
      return q;
    });
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));


    navigate(`/question/${DID}`);
  };

  return (
    <div className="question-box" onClick={handleClick}>
      <div className="question-box-header">
        <span className="date">{new Date(date).toLocaleDateString()}</span>
        <h2 className="title">{title}</h2>
      </div>
      <p className="question-text">{questionText}</p>
      <div className="question-box-footer">
        <div className="stats">
          <span className="stats-item">
            <i className="fas fa-thumbs-up"></i> {votes} votes
          </span>
          <span className="stats-item">
            <i className="fas fa-reply"></i> {answers.length} answers
          </span>
          <span className="stats-item">
            <i className="fas fa-eye"></i> {views} views
          </span>
        </div>
        <div className="flags">
          {flags.slice(0, 4).map((flag, index) => (
            <span key={index} className="flag-item">#{flag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
