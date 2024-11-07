import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Button, InputField } from '../styled-components';
import { addQuestion } from '../redux/actions/questionsActions';
import Editor from './Editor';

const AskAQuestion = ({ onClose }) => {
  const dispatch = useDispatch();
  
  // Access user data from Redux
  const username = useSelector((state) => state.user.username); // Get the user's username from Redux
  const userUuid = useSelector((state) => state.user.userUuid); // Assuming the user UUID is stored correctly in Redux

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
  const [code, setCode] = useState('');
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
        const questionUUID = uuidv4(); // Generate unique question UUID
        const questionData = {
            uuid: questionUUID, // Unique ID for the question
            title,
            subtitle,
            username,
            userUuid, // Add the user's UUID to the question data from Redux
            flags: selectedFlags,
            code,
            views: 1,
            votes: 1,
            answers: [],
            createdAt: new Date().toISOString(),
        };

        // Log the data before sending it to the server
        console.log("Sending the following question data to the server:", questionData);

        try {
            // Dispatch action to add question to Redux store
            dispatch(addQuestion(questionData)); 

            // Send question to server
            await axios.post('http://localhost:5000/api/questions', questionData);

            onClose(); // Close the modal after submission
        } catch (error) {
            console.error("Error submitting question:", error);
            setApiError("An error occurred while submitting the question. Please try again.");
        }
    }
};

  // Effect hook to handle modal opening and closing styles
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    };
  }, []);

  // Close modal when overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Editor code={code} onCodeChange={setCode} />
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
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 900px;
  height: 800px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    flex-direction: column;
    width: 90%;
    height: auto;
    transform: scale(0.95);
  }
`;

const LeftBoxSection = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column; 
  background-color: black;
  border-right: 5px solid ${({ theme }) => theme.colors.primary};
  position: relative;

  @media (max-width: ${({ theme }) => theme.screenSizes.phone}) {
    width: 100%;
    border-right: none;
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  }
`;
const EditorTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ theme }) => theme.colors.primary}; 
  font-size: 24px; 
  font-weight: ${({ theme }) => theme.fontWeights.bold}; 
  margin: 20px 0; 
  padding: 0 10px; 
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
  gap: 30px; 
  margin-top: 20px;
  flex-grow: 1;
  overflow-y: auto;
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
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
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
  font-weight: bold;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

`;


const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: 5px; 
`;
