import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '80px'};
  border: ${props => props.border || '2px solid #FFFF00'};
  background-color: ${props => props.bgColor || '#1b1b1b'};
  color: ${props => props.color || '#FFFFFF'};
  padding: ${props => props.padding || '10px'};
  font-size: ${props => props.fontSize || '14px'};
  resize: ${props => props.resize || 'none'};
  border-radius: ${props => props.borderRadius || '0'};
  box-sizing: border-box;
`;

const AceEditorStyled = styled(AceEditor)`
  width: ${props => props.width || '100%'} !important;
  height: ${props => props.height || '80px'} !important;
  border: ${props => props.border || '2px solid #FFFF00'};
  border-radius: ${props => props.borderRadius || '0'};
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const TextInput = ({
  isAceEditor,
  value,
  onChange,
  width,
  height,
  border,
  bgColor,
  color,
  padding,
  fontSize,
  resize,
  borderRadius,
  ...props
}) => {
  if (isAceEditor) {
    return (
      <AceEditorStyled
      setOptions={{
        useWorker: false,
      }}
        mode="javascript"
        theme="monokai"
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        border={border}
        borderRadius={borderRadius}
        {...props}
      />
    );
  }

  return (
    <TextAreaStyled
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      border={border}
      bgColor={bgColor}
      color={color}
      padding={padding}
      fontSize={fontSize}
      resize={resize}
      borderRadius={borderRadius}
      {...props}
    />
  );
};

export default TextInput;
