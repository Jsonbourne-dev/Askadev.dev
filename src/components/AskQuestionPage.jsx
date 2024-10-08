import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import styled from 'styled-components';
import { addQuestion } from '../redux/actions/questionsActions'; 

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
  color: #00FFFF;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 10px;
  }
`;

const FormWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #1a1a1a;
  border: 2px solid #00FFFF;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 1000px) {
    padding: 10px;
    box-shadow: none;
    max-height: 100vh;
    border-radius: 0;
    border-width: 1px;
  }
`;

const FormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

const FormHeader = styled.h2`
  color: #FFFF00;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const FormItem = styled.div`
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #00FFFF;
  border-radius: 5px;
  background-color: #000000;
  color: #00FFFF;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #00FFFF;
  border-radius: 5px;
  background-color: #000000;
  color: #00FFFF;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;

  @media (max-width: 1000px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const SubmitButton = styled.button`
  background: #FFFF00;
  border: 4px solid #e1b91e;
  border-radius: 6px;
  color: #000000;
  padding: 12px 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 6px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);
  display: inline-block;
  margin-top: 10px;

  &:active {
    background: #e1b91e;
    border-color: #d0a10d;
    box-shadow: 0 2px 0 #d0a10d, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }

  @media (max-width: 1000px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const BackButton = styled.button`
  background: #FFFF00;
  border: 4px solid #e1b91e;
  border-radius: 6px;
  color: #000000;
  padding: 10px 16px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 4px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);
  margin-right: 10px;

  &:active {
    background: #e1b91e;
    border-color: #d0a10d;
    box-shadow: 0 2px 0 #d0a10d, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }

  @media (max-width: 1000px) {
    padding: 6px 10px;
    font-size: 10px;
  }
`;

const CodeEditor = styled(AceEditor)`
  height: 200px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 150px;
  }
`;

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
          <BackButton onClick={handleBackClick}>Back</BackButton>
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
            <Textarea
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
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormWrapper>
    </PageContainer>
  );
};

export default AskQuestionPage;
