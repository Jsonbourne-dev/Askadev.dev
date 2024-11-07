import React from 'react';
import styled from 'styled-components';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  rows,
  disabled = false,
  onEnter,
  title,
  height = '40px',
  titleFontSize = '18px', 
  hintFontSize = '14px',
  fontFamily = 'Space Grotesk, sans-serif',
  color = 'lightgrey',
  titleDistance = '10px'
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onEnter && height === '40px') {
      e.preventDefault();
      onEnter(value);
    }
  };

  const isMultiline = parseInt(height, 10) > 40;

  return (
    <InputContainer>
      {title && (
        <Title
          fontSize={titleFontSize} 
          fontFamily={fontFamily}
          color={color}
          titleDistance={titleDistance}
        >
          {title}
        </Title>
      )}
      {isMultiline ? (
        <ResizableInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          height={height}
          fontFamily={fontFamily}
          color={color}
          hintFontSize={hintFontSize} 
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          height={height}
          fontFamily={fontFamily}
          color={color}
          hintFontSize={hintFontSize} 
        />
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Title = styled.label`
  position: absolute;
  top: ${({ titleDistance }) => `-${titleDistance}`}; 
  left: 0px;
  padding: 0 5px;
  font-size: ${({ fontSize }) => fontSize}; 
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color}; 
`;

const StyledInput = styled.input`
  border: 1px solid darkgrey;
  border-radius: 8px;
  padding: 10px;
  height: ${({ height }) => height}; 
  font-size: ${({ hintFontSize }) => hintFontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color}; 
  background: transparent; 
  outline: none;

  &::placeholder {
    color: #808080;
    font-size: ${({ hintFontSize }) => hintFontSize}; 
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || '#bee239'};
  }
`;

const ResizableInput = styled.textarea`
  border: 1px solid darkgrey;
  border-radius: 8px;
  padding: 10px;
  resize: vertical;
  min-height: ${({ height }) => height}; 
  font-size: ${({ hintFontSize }) => hintFontSize}; 
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color}; 
  background: transparent; 
  outline: none;

  &::placeholder {
    color: #808080; 
    font-size: ${({ hintFontSize }) => hintFontSize};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || '#bee239'};
  }
`;

export default InputField;
