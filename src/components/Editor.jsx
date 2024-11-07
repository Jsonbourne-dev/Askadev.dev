// src/styled-components/Editor.js

import React from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/webpack-resolver';

const Editor = ({ code, onCodeChange }) => {
  return (
    <EditorContainer>
      <EditorTitle>Enter Code Here</EditorTitle>
      <StyledAceEditor
        mode="javascript"
        theme="dracula"
        onChange={onCodeChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="100%"
        fontSize={15}
        value={code}
      />
    </EditorContainer>
  );
};

export default Editor;

const EditorContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-right: 5px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 100%;

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

const StyledAceEditor = styled(AceEditor)`
  width: 100%;
  height: 100%;
  font-size: 15px;
  border: none;
`;
