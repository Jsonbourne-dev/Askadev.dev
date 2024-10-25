// Flag.js
import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField'; // Import the InputField component

const Flag = ({ initialFlags, onFlagsChange }) => {
  const [allFlags, setAllFlags] = useState(initialFlags);
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [customFlag, setCustomFlag] = useState('');
  const [error, setError] = useState('');

  const handleFlagClick = (flag) => {
    if (selectedFlags.includes(flag)) {
      setSelectedFlags(selectedFlags.filter(selected => selected !== flag));
    } else if (selectedFlags.length < 4) {
      setSelectedFlags([...selectedFlags, flag]);
    } else {
      setError('You can only select up to 4 flags.');
    }
    onFlagsChange([...selectedFlags]);
  };

  const handleCustomFlagSubmit = (newFlag) => {
    if (!newFlag.trim()) {
      setError('Please enter a valid flag.');
      return;
    }

    if (allFlags.includes(newFlag.trim())) {
      setError('Flag already exists.');
      return;
    }

    // Add the new flag to the state and select it
    const updatedFlags = [...allFlags, newFlag.trim()];
    setAllFlags(updatedFlags);
    setSelectedFlags([...selectedFlags, newFlag.trim()]); // Automatically select the new flag
    setCustomFlag(''); // Clear the input after adding
    setError(''); // Clear any existing error message

    // Pass the updated flags back to the parent
    onFlagsChange([...selectedFlags, newFlag.trim()]);
  };

  return (
    <Container>
      <InputField
        placeholder="Add a custom flag"
        value={customFlag}
        onChange={(e) => setCustomFlag(e.target.value)}
        onEnter={handleCustomFlagSubmit} // Pass the handle function for Enter key
      />
      
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <FlagsContainer>
        {allFlags.map((flag, index) => (
          <FlagButton
            key={index}
            isSelected={selectedFlags.includes(flag)}
            onClick={() => handleFlagClick(flag)}
          >
            {flag}
          </FlagButton>
        ))}
      </FlagsContainer>
    </Container>
  );
};

export default Flag;

// Styled components
const Container = styled.div`
  margin-top: 10px;
`;

const FlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px; 
  margin-top: 10px;
  max-height: 150px;
  overflow-y: auto; /* Enable vertical scrolling for flags */
`;

const FlagButton = styled.button`
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.primary : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'lightgrey')};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 5px 15px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.8; /* Add some hover effect */
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  margin-top: 5px; /* Add margin to separate from input */
  margin-bottom: 10px; /* Add margin to separate from flags */
`;
