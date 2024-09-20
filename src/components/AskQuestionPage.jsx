import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import styled from 'styled-components';
import { addQuestion } from '../redux/actions/questionsActions'; 
import { Container, Button } from '../styled-components';

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
    <Container
      backgroundColor="#000000"
      color="#00FFFF"
      padding="20px"
      fontSize="16px" // Update to only fontSize
    >
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
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AskQuestionPage;
