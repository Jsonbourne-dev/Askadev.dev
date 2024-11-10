import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Button, InputField } from '../styled-components';
import { addQuestion } from '../redux/actions/questionsActions';

const AskAQuestion = ({ onClose }) => {
  const dispatch = useDispatch();
  
  // Access user data from Redux
  const username = useSelector((state) => state.user.username);
  const userUuid = useSelector((state) => state.user.userUuid);

  const initialFlags = [
    "Web Development", "Terminal", "JavaScript", "React", 
    "CSS", "Node.js", "Python", "Git", "APIs", 
    "Frontend", "Backend"
  ];

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [titleError, setTitleError] = useState('');
  const [subtitleError, setSubtitleError] = useState('');
  const [apiError, setApiError] = useState(null); 

  // Handle flag selection for the question
  const handleFlagClick = (flag) => {
    setSelectedFlags((prevFlags) => 
      prevFlags.includes(flag) 
        ? prevFlags.filter(selected => selected !== flag) 
        : [...prevFlags, flag]
    );
  };

  // Handle form submission
  const handleSubmit = async () => {
    let valid = true;

    // Validate title and subtitle
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
        const questionUUID = uuidv4();
        const questionData = {
            uuid: questionUUID,
            title,
            subtitle,
            username,
            userUuid,
            flags: selectedFlags,
            views: 1,
            votes: 1,
            answers: [],
            createdAt: new Date().toISOString(),
        };

        try {
            dispatch(addQuestion(questionData)); 
            await axios.post('http://localhost:5000/api/questions', questionData);
            onClose();
        } catch (error) {
            console.error("Error submitting question:", error);
            setApiError("An error occurred while submitting the question. Please try again.");
        }
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
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <RightFormSection>
          <CloseButton onClick={onClose}>
            <CloseIcon>X</CloseIcon>
          </CloseButton>
          <InputContainer>
            <InputFieldWrapper>
              {titleError && <ErrorMessage>{titleError}</ErrorMessage>}
              <StyledInputLabel>Question Title</StyledInputLabel>
              <StyledInputField
                placeholder="Enter your question title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputFieldWrapper>

            <InputFieldWrapper>
              {subtitleError && <ErrorMessage>{subtitleError}</ErrorMessage>}
              <StyledInputLabel>Question Description</StyledInputLabel>
              <StyledInputField
                placeholder="Describe your question"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </InputFieldWrapper>

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
          {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
          <Button variant="desktop-outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </RightFormSection>
      </ModalContainer>
    </Overlay>
  );
};

export default AskAQuestion;

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 600px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const RightFormSection = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.8;
  }
`;

const CloseIcon = styled.span`
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white}; 
  margin-bottom: 5px; 
`;

const StyledInputField = styled(InputField)`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 10px;
`;

const FlagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const FlagButton = styled.button`
  background-color: ${({ selected }) => (selected ? '#BEE239' : 'transparent')};
  color: ${({ selected }) => (selected ? 'black' : 'white')}; 
  border: 2px solid #BEE239; 
  font-size: 15px;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: 5px; 
`;
