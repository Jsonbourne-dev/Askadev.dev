import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import styled, { ThemeProvider } from 'styled-components';
import { Button, InputField } from '../styled-components';
import { addQuestion } from '../redux/actions/questionsActions';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'; // Change as needed for the specific language
import 'ace-builds/src-noconflict/theme-dracula'; // Import the Dracula theme
import 'ace-builds/webpack-resolver';

import QuestionCard from './QuestionBox';

const AskAQuestion = ({ onClose }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const initialFlags = ["Web Development", "Terminal", "JavaScript", "React", "CSS", "Node.js", "Python", "Git", "APIs", "Frontend", "Backend"];

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [titleError, setTitleError] = useState('');
  const [subtitleError, setSubtitleError] = useState('');
  const [code, setCode] = useState('');

  const handleFlagClick = (flag) => {
    if (selectedFlags.includes(flag)) {
      setSelectedFlags(selectedFlags.filter(selected => selected !== flag));
    } else {
      setSelectedFlags([...selectedFlags, flag]);
    }
  };

  const handleSubmit = () => {
    let valid = true;

    if (title.trim() === '') {
      setTitleError('Please fill in this field');
      valid = false;
    } else {
      setTitleError('');
    }

    if (subtitle.trim() === '') {
      setSubtitleError('Please fill in this field');
      valid = false;
    } else {
      setSubtitleError('');
    }

    if (valid) {
      const questionDID = uuidv4(); // Generate a unique identifier

      dispatch(addQuestion({
        DID: questionDID, // Pass the UUID here
        title,
        subtitle,
        username,
        flags: selectedFlags,
        code, 
        views: 1,
        votes: 1,
        answers: 0,
        createdAt: new Date().toISOString(),
      }));
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ThemeProvider theme={themeData}>
      <Overlay onClick={handleOverlayClick}>
        <ModalContainer>
          <LeftBoxSection>
            <EditorTitle>Enter Code Here</EditorTitle>
            <AceEditor
              mode="javascript" 
              theme="dracula" 
              onChange={setCode}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
              width="100%"
              height="100%"
              fontSize={15}
            />
          </LeftBoxSection>
          <RightFormSection>
            <CloseButton onClick={onClose}>
              <CloseIcon>X</CloseIcon>
            </CloseButton>
            <InputContainer>
              {titleError && <ErrorMessage>{titleError}</ErrorMessage>}
              <StyledInputField
                title="Question Title"
                placeholder="Enter your question title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {subtitleError && <ErrorMessage>{subtitleError}</ErrorMessage>}
              <StyledInputField
                title="Question Description"
                placeholder="Describe your question"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />

              <FlagContainer>
                {initialFlags.map((flag) => (
                  <FlagButton
                    key={flag}
                    selected={selectedFlags.includes(flag)}
                    onClick={() => handleFlagClick(flag)}
                  >
                    {flag}
                  </FlagButton>
                ))}
              </FlagContainer>
            </InputContainer>
            <Button variant="desktop-outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </RightFormSection>
        </ModalContainer>
      </Overlay>
    </ThemeProvider>
  );
};

export default AskAQuestion;

const themeData = {
  fontSizes: {
    large: '40px',
    medium: '30px',
    small: '20px',
    xsmall: '18px',
  },
  fontWeights: {
    bold: 'bold',
    thin: '300',
    normal: '400',
  },
  fonts: {
    thin: "'Roboto Thin', sans-serif",
    bold: "'Roboto Bold', sans-serif",
    regular: "'Roboto', sans-serif",
  },
  colors: {
    primary: '#BEE239',
    text: 'black',
    outlined: '#BEE239',
    white: 'white',
    error: 'red',
  },
  screenSizes: {
    desktop: '800px',
    phone: '600px',
  },
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(17, 20, 26, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  background-color: #11141A;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 900px;
  height: 800px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

const LeftBoxSection = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column; 
  background-color: black;
  border-right: 5px solid #BEE239;
  position: relative;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    width: 100%;
    border-right: none;
    border-bottom: 5px solid #BEE239;
  }
`;

const EditorTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: #BEE239; 
  font-size: 24px; 
  font-weight: ${({ theme }) => theme.fontWeights.bold}; 
  margin: 20px;
`;

const RightFormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    padding: 20px;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const CloseIcon = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  flex-grow: 1;
  overflow-y: auto;
`;

const StyledInputField = styled(InputField)`
  width: 100%;
  max-width: 100%;
`;

const FlagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const FlagButton = styled.button`
  background-color: ${({ selected }) => (selected ? '#BEE239' : 'transparent')}; // Background color for selected
  color: ${({ selected }) => (selected ? 'black' : 'white')}; // Text color
  border: 1px solid #BEE239;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#BEE239' : '#BEE239')}; // Keep the background color same on hover
    color: black; // Change text color to black on hover
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: -20px;
  margin-top: -20px;
`;
