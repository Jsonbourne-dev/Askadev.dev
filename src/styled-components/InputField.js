import React from 'react';
import styled from 'styled-components';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  rows,
  isResizable = false,
  disabled = false,
  onEnter,
  title // Title prop for the label
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onEnter) {
      e.preventDefault();
      onEnter(value);
    }
  };

  return (
    <InputContainer>
      {title && <Title>{title}</Title>} {/* Render title/label above the input */}
      {isResizable ? (
        <ResizableInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onKeyDown={handleKeyDown}
        />
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Space Grotesk', sans-serif; /* Set the global font for the container */
  margin-bottom: 15px; /* Add some space below the input field */
`;

const Title = styled.label`
  margin-bottom: 8px; /* Space between title and input */
  font-size: 18px; /* Hardcoded font-size */
  font-family: 'Space Grotesk', sans-serif; /* Use 'Space Grotesk' font */
  color: ${({ theme }) => theme.colors?.primary || '#000'}; /* Default color for title */
`;

const StyledInput = styled.input`
  border: 1px solid darkgrey;
  border-radius: 8px;
  padding: 5px 10px;
  height: 40px;
  font-size: 14px; /* Hardcoded font-size */
  font-family: 'Space Grotesk', sans-serif; /* Updated font-family */
  color: lightgrey;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #808080;
    font-size: 14px; /* Hardcoded font-size */
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || '#bee239'};
  }
`;

const ResizableInput = styled.textarea`
  border: 1px solid darkgrey;
  border-radius: 8px;
  padding: 5px 10px;
  resize: vertical;
  font-size: 14px; /* Hardcoded font-size */
  font-family: 'Space Grotesk', sans-serif; /* Updated font-family */
  color: lightgrey;
  background: transparent;
  outline: none;
  min-height: 40px;
  max-height: 100px;

  &::placeholder {
    color: #808080;
    font-size: 14px; /* Hardcoded font-size */
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || '#bee239'};
  }
`;

export default InputField;
