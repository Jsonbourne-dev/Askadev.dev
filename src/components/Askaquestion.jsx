import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Button, InputField, Flag } from '../styled-components';
import { addQuestion } from '../redux/actions/questionsActions';

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

const AskAQuestion = ({ onClose }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const initialFlags = [
    "JavaScript", 
    "React", 
    "Web Development", 
    "CSS", 
    "Node.js", 
    "Python", 
    "Ruby", 
    "Java", 
    "C++", 
    "TypeScript"
  ];

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [titleError, setTitleError] = useState('');
  const [subtitleError, setSubtitleError] = useState('');

  const handleFlagsChange = (flags) => {
    setSelectedFlags(flags);
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
      const timestamp = new Date().toISOString();

      dispatch(addQuestion({
        title,
        subtitle,
        username,
        flags: selectedFlags,
        views: 1,
        votes: 1,
        answers: 0,
        createdAt: timestamp,
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
          <CloseButton onClick={onClose}>
            <CloseIcon>X</CloseIcon>
          </CloseButton>
          <InputContainer>
            {titleError && <ErrorMessage>{titleError}</ErrorMessage>}
            <StyledInputField 
              title="Question Title" /* Pass title prop */
              placeholder="Enter your question title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            {subtitleError && <ErrorMessage>{subtitleError}</ErrorMessage>}
            <StyledInputField 
              title="Question Description" /* Pass title prop */
              placeholder="Describe your question" 
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />

            <StyledFlag 
              initialFlags={initialFlags}
              onFlagsChange={handleFlagsChange} 
            />
          </InputContainer>
          <ButtonWrapper>
            <Button variant="desktop-outlined" onClick={handleSubmit}>Submit</Button>
          </ButtonWrapper>
        </ModalContainer>
      </Overlay>
    </ThemeProvider>
  );
};

export default AskAQuestion;

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
  background-color: #11141A;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 600px;
  max-width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
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

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const StyledInputField = styled(InputField)`
  width: 100%;
  max-width: 100%;
`;

const StyledFlag = styled(Flag)`
  width: 100%;
  max-width: 100%;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: -20px;
  margin-top: -20px;
`;
