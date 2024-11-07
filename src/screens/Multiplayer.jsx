import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components"; 
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css'; 
import Editor from "../components/Editor"; 
import { FaPlus, FaTrashAlt, FaFileCode, FaTerminal, FaBug } from 'react-icons/fa'; // Importing icons

// Theme data
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
    background: '#11141A',
    overlay: 'rgba(17, 20, 26, 0.7)',
    sidebar: '#1F2328',
    terminal: '#1E2126',
  },
};

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 15px;
  background-color: ${props => props.theme.colors.sidebar};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.colors.text};
`;

const EditorContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  color: ${props => props.theme.colors.text};
`;

const TerminalContainer = styled.div`
  width: 300px;
  padding: 10px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const TerminalTabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const TerminalOutput = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  background-color: ${props => props.theme.colors.terminal};
  color: ${props => props.theme.colors.text};
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AddFileButton = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.primary}CC; /* Slightly transparent on hover */
  }

  svg {
    margin-right: 5px; /* Space between icon and text */
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.error};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.error}CC; /* Slightly transparent on hover */
  }
`;

// Terminal component using xterm.js
const TerminalComponent = () => {
    const terminalRef = useRef(null);
    const fitAddon = new FitAddon();
    const terminal = new Terminal();

    useEffect(() => {
        terminal.open(terminalRef.current);
        fitAddon.fit();
        terminal.loadAddon(fitAddon);

        terminal.writeln('Welcome to xterm.js!');
        terminal.writeln('Type "help" for a list of commands.');

        window.addEventListener('resize', fitAddon.fit);

        return () => {
            terminal.dispose();
            window.removeEventListener('resize', fitAddon.fit);
        };
    }, []);

    return (
        <TerminalOutput ref={terminalRef} />
    );
};

// Main Multiplayer component
function Multiplayer() {
    const [files, setFiles] = useState(['File1.js', 'File2.js']);
    const [currentFile, setCurrentFile] = useState(null);

    const addFile = () => {
        const newFileName = prompt("Enter new file name:", "NewFile.js");
        if (newFileName) {
            setFiles([...files, newFileName]);
        }
    };

    const deleteFile = (fileName) => {
        setFiles(files.filter(file => file !== fileName));
        if (currentFile === fileName) {
            setCurrentFile(null);
        }
    };

    return (
        <ThemeProvider theme={themeData}>
            <Container>
                <Sidebar>
                    <h2>Files & Directories</h2>
                    <AddFileButton onClick={addFile}>
                        <FaPlus /> Add File
                    </AddFileButton>
                    <FileList>
                        {files.map(file => (
                            <FileItem key={file}>
                                <span onClick={() => setCurrentFile(file)}>
                                    <FaFileCode style={{ marginRight: '5px' }} />
                                    {file}
                                </span>
                                <DeleteButton onClick={() => deleteFile(file)}>
                                    <FaTrashAlt />
                                </DeleteButton>
                            </FileItem>
                        ))}
                    </FileList>
                </Sidebar>
                <EditorContainer>
                    <Editor fileName={currentFile} />
                </EditorContainer>
                <TerminalContainer>
                    <TerminalTabs>
                        <button>
                            <FaTerminal /> Console
                        </button>
                        <button>
                            <FaTerminal /> Shell
                        </button>
                        <button>
                            <FaBug /> Debug
                        </button>
                    </TerminalTabs>
                    <TerminalComponent />
                </TerminalContainer>
            </Container>
        </ThemeProvider>
    );
}

export default Multiplayer;
