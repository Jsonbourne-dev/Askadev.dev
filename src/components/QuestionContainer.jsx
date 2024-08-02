import React from 'react';
import './components_css/QuestionContainer.css';

const QuestionBox = ({ date, title, questionText, flags = [], votes, answers, views }) => {
  // Ensure flags is an array
  const flagsArray = Array.isArray(flags) ? flags : [];

  const displayedFlags = flagsArray.slice(0, 4);

  return (
    <div className="question-box">
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
            <i className="fas fa-reply"></i> {answers} answers
          </span>
          <span className="stats-item">
            <i className="fas fa-eye"></i> {views} views
          </span>
        </div>
        <div className="flags">
          {displayedFlags.map((flag, index) => (
            <span key={index} className="flag-item">#{flag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
