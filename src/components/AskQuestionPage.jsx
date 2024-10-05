// AskQuestionPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import styled from 'styled-components';
import { addQuestion } from '../redux/actions/questionsActions'; 
import { Button } from '../styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 0 20px;
  box-sizing: border-box;
`;

const FormWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: #000000;
  border-left: 2px solid #FFFF00;

  border-top: none;
  border-bottom: none;
  border-radius: 0;
  padding: 30px 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    padding: 20px 10px;
    box-shadow: none;
    border-left: 2px solid #FFFF00;
    border-top: none;
    border-bottom: none;
  }
`;

const FormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
  }
`;

const FormHeader = styled.h2`
  color: #FFFF00;
  margin: 0;
  font-size: 24px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const FormItem = styled.div`
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  display: block;
  color: #FFFFFF;
  margin-bottom: 8px;
  font-size: 16px;

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #FFFF00;
  border-radius: 5px;
  background-color: #000000;
  color: #FFFF00;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #FFFF00;
  }

  @media (max-width: 1000px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #FFFF00;
  border-radius: 5px;
  background-color: #000000;
  color: #FFFF00;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #FFFF00;
  }

  @media (max-width: 1000px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const CodeEditorWrapper = styled.div`
  margin-top: 10px;
  border: 1px solid #FFFF00;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1000px) {
    margin-top: 5px;
  }
`;

const CodeEditorStyled = styled(AceEditor)`
  height: 200px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 150px;
  }

  .ace_editor {
    background-color: #000000 !important;
  }
`;

const FlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FlagLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.checked ? '#FFFF00' : '#000000')};
  color: ${props => (props.checked ? '#000000' : '#FFFFFF')};
  padding: 10px 14px;
  border: 2px solid #FFFF00;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  transition: background-color 0.3s, color 0.3s;

  input {
    display: none;
  }

  &:hover {
    background-color: #FFFF00;
    color: #000000;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

const SelectedFlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const SelectedFlag = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFF00;
  color: #000000;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const RemoveFlagButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  margin-left: 8px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;

  &:hover {
    color: #FF0000;
  }
`;

const AddCustomFlagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const CustomFlagInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 2px solid #FFFF00;
  border-radius: 5px;
  background-color: #000000;
  color: #FFFF00;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #FFFF00;
  }
`;

const ErrorMessage = styled.div`
  color: #FF0000;
  margin-top: 5px;
  font-size: 14px;

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

const availableFlags = [
  'React',
  'Python',
  'JavaScript',
  'Node.js',
  'CSS',
  'HTML',
  'Java',
  'C++',
  'TypeScript',
  'Ruby',
  'Go',
  'PHP',
  'Swift',
  'Kotlin',
  'Django',
  'Flask',
  'Angular',
  'Vue.js',
  'Express',
  'MongoDB',
];

const AskQuestionPage = () => {
  const [title, setTitle] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [code, setCode] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [customFlag, setCustomFlag] = useState('');
  const [titleError, setTitleError] = useState('');
  const [flagError, setFlagError] = useState('');
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const DID = localStorage.getItem('DID') || 'unknown';

  const countWords = (str) => {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
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

  const handlePredefinedFlagChange = (flag) => {
    if (selectedFlags.includes(flag)) {
      setSelectedFlags(selectedFlags.filter(f => f !== flag));
      setFlagError('');
    } else {
      if (selectedFlags.length < 3) {
        setSelectedFlags([...selectedFlags, flag]);
        setFlagError('');
      } else {
        setFlagError('You can select up to 3 flags.');
      }
    }
  };

  const handleAddCustomFlag = () => {
    const trimmedFlag = customFlag.trim();
    if (trimmedFlag === '') {
      setFlagError('Custom flag cannot be empty.');
      return;
    }

    if (selectedFlags.length >= 3) {
      setFlagError('You can select up to 3 flags.');
      return;
    }

    if (selectedFlags.includes(trimmedFlag)) {
      setFlagError('This flag is already selected.');
      return;
    }

    setSelectedFlags([...selectedFlags, trimmedFlag]);
    setCustomFlag('');
    setFlagError('');
  };

  const handleRemoveFlag = (flag) => {
    setSelectedFlags(selectedFlags.filter(f => f !== flag));
    setFlagError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && questionText) {
      const newQuestion = {
        id: Date.now(),
        date: new Date().toISOString(),
        title,
        questionText,
        code,
        flags: selectedFlags,
        DID,
        votes: 0,
        answers: 0,
        views: 0,
      };

      dispatch(addQuestion(newQuestion));

      setTitle('');
      setQuestionText('');
      setCode('');
      setSelectedFlags([]);
      setCustomFlag('');
      setFlagError('');

      navigate('/community');
    } else {
      alert('Please fill out the title and question text.');
    }
  };

  const handleBackClick = () => {
    navigate('/community');
  };

  return (
    <Container>
      <FormWrapper>
        <FormHeaderWrapper>
          <FormHeader>Ask a Question</FormHeader>
          <Button onClick={handleBackClick}>Back</Button>
        </FormHeaderWrapper>
        <form onSubmit={handleSubmit}>
          <FormItem>
            <Label htmlFor="title">Title:</Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter your question title"
              required
            />
            {titleError && <ErrorMessage>{titleError}</ErrorMessage>}
          </FormItem>
          <FormItem>
            <Label htmlFor="questionText">Question Text:</Label>
            <Textarea
              id="questionText"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Describe your question in detail"
              required
              rows="5"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="code">Code:</Label>
            <CodeEditorWrapper>
              <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={setCode}
                name="code_editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  useWorker: false,
                }}
                value={code}
              />
            </CodeEditorWrapper>
          </FormItem>
          <FormItem>
            <Label>Flags:</Label>
            <FlagsContainer>
              {availableFlags.map((flag) => (
                <FlagLabel key={flag} checked={selectedFlags.includes(flag)}>
                  <input
                    type="checkbox"
                    checked={selectedFlags.includes(flag)}
                    onChange={() => handlePredefinedFlagChange(flag)}
                    disabled={
                      !selectedFlags.includes(flag) && selectedFlags.length >= 3
                    }
                  />
                  {flag}
                </FlagLabel>
              ))}
            </FlagsContainer>
            {flagError && <ErrorMessage>{flagError}</ErrorMessage>}
            <AddCustomFlagContainer>
              <CustomFlagInput
                type="text"
                value={customFlag}
                onChange={(e) => setCustomFlag(e.target.value)}
                placeholder="Add a custom flag"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddCustomFlag();
                  }
                }}
              />
              <Button type="button" onClick={handleAddCustomFlag}>Add</Button>
            </AddCustomFlagContainer>
            <SelectedFlagsContainer>
              {selectedFlags.map((flag, index) => (
                <SelectedFlag key={index}>
                  {flag}
                  <RemoveFlagButton onClick={() => handleRemoveFlag(flag)}>×</RemoveFlagButton>
                </SelectedFlag>
              ))}
            </SelectedFlagsContainer>
          </FormItem>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AskQuestionPage;
