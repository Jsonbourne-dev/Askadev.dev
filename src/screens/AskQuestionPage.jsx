import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../redux/actions/questionsActions';
import { Button, CodeEditor, FormHeader, FormHeaderWrapper, FormItem, FormWrapper, Input, PageContainer, TextArea } from "../styled-components";

const AskQuestionPage = () => {
  const [title, setTitle] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [code, setCode] = useState('');
  const [flags, setFlags] = useState(['', '', '']);
  const [titleError, setTitleError] = useState('');
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const DID = localStorage.getItem('DID') || 'unknown';

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

      dispatch(addQuestion(newQuestion));

      setTitle('');
      setQuestionText('');
      setCode('');
      setFlags(['', '', '']);

      navigate('/community');
    } else {
      alert('Please fill out the title and question text.');
    }
  };

  const handleBackClick = () => {
    navigate('/community');
  };

  return (
    <PageContainer>
      <FormWrapper>
        <FormHeaderWrapper>
          <FormHeader>Ask a Question</FormHeader>
          <Button onClick={handleBackClick}>Back</Button>
        </FormHeaderWrapper>
        <form onSubmit={handleSubmit}>
          <FormItem>
            <label htmlFor="title">Title:</label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
            {titleError && <div style={{ color: '#FF4500', marginTop: '5px' }}>{titleError}</div>}
          </FormItem>
          <FormItem>
            <label htmlFor="questionText">Question Text:</label>
            <TextArea
              id="questionText"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
            />
          </FormItem>
          <FormItem>
            <label htmlFor="code">Code:</label>
            <CodeEditor
              mode="javascript"
              theme="monokai"
              name="codeEditor"
              value={code}
              onChange={setCode}
              fontSize={16}
              setOptions={{
                useWorker: false, 
              }}
            />
          </FormItem>
          <FormItem>
            <label>Flags:</label>
            {flags.map((flag, index) => (
              <Input
                key={index}
                type="text"
                value={flag}
                onChange={(e) => handleFlagChange(index, e.target.value)}
                placeholder={`Flag ${index + 1}`}
              />
            ))}
          </FormItem>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </PageContainer>
  );
};

export default AskQuestionPage;
