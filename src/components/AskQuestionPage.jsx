import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import './components_css/AskQuestionPage.css';

const AskQuestionPage = () => {
  const [title, setTitle] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [code, setCode] = useState('');
  const [flags, setFlags] = useState(['', '', '']);
  const [titleError, setTitleError] = useState('');
  const navigate = useNavigate();

  // Retrieve DID from localStorage
  const DID = localStorage.getItem('DID') || 'unknown';

  // Function to count words
  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (countWords(newTitle) <= 8) {
      setTitle(newTitle);
      setTitleError('');
    } else {
      setTitleError('Title cannot exceed 8 words.');
    }
  };

  const handleFlagChange = (index, value) => {
    const newFlags = [...flags];
    newFlags[index] = value;
    setFlags(newFlags);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredFlags = flags.filter(flag => flag.trim() !== '');

    if (title && questionText) {
      const newQuestion = {
        id: Date.now(), 
        date: new Date().toISOString(),
        title,
        questionText,
        code,
        flags: filteredFlags,
        DID, 
        votes: 0,
        answers: 0,
        views: 0,
      };

      const existingQuestions = JSON.parse(localStorage.getItem('questions')) || [];
      existingQuestions.push(newQuestion);
      localStorage.setItem('questions', JSON.stringify(existingQuestions));

      setTitle('');
      setQuestionText('');
      setCode('');
      setFlags(['', '', '']);

      navigate('/community');
    } else {
      alert("Please fill out the title and question text.");
    }
  };

  return (
    <div className="aq-page-container">
      <div className="aq-form-wrapper">
        <h2 className="aq-form-header">Ask a Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="aq-form-item">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
            {titleError && <div className="aq-error-message">{titleError}</div>}
          </div>
          <div className="aq-form-item">
            <label htmlFor="questionText">Question Text:</label>
            <textarea
              id="questionText"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
            />
          </div>
          <div className="aq-form-item">
            <label htmlFor="code">Code:</label>
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="codeEditor"
              className="aq-code-editor"
              value={code}
              onChange={setCode}
              fontSize={14}
              width="100%"
              height="300px"
              setOptions={{ useWorker: false }}
            />
          </div>
          <div className="aq-form-item">
            <label>Flags:</label>
            {flags.map((flag, index) => (
              <input
                key={index}
                type="text"
                value={flag}
                onChange={(e) => handleFlagChange(index, e.target.value)}
                placeholder={`Flag ${index + 1}`}
              />
            ))}
          </div>
          <div className="aq-form-item">
            <button type="submit" className="aq-submit-button">Submit Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestionPage;
