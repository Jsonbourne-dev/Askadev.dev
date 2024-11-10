import React, { useState, useRef } from 'react';

const Xterm = ({ initialFiles = [] }) => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab
  const [bashOutput, setBashOutput] = useState(''); // Store bash output text
  const [fileSystem, setFileSystem] = useState(initialFiles); // Fake file system
  const [cwd, setCwd] = useState('/'); // Current working directory (root directory by default)
  const [inputValue, setInputValue] = useState(''); // Track the input value
  const terminalRef = useRef(null);

  // Commands object for structured command definitions
  const commands = {
    ls: {
      execute: () => {
        const currentDirContent = fileSystem.filter((file) => file.startsWith(cwd));
        return currentDirContent.length > 0 ? currentDirContent.join('\n') : 'No files or folders';
      },
    },
    mkdir: {
      execute: (folderName) => {
        if (folderName && !fileSystem.includes(`${cwd}${folderName}`)) {
          setFileSystem([...fileSystem, `${cwd}${folderName}`]);
          return `Folder ${folderName} created`;
        }
        return 'mkdir: folder already exists or invalid name';
      },
    },
    touch: {
      execute: (fileName) => {
        if (fileName && !fileSystem.includes(`${cwd}${fileName}`)) {
          setFileSystem([...fileSystem, `${cwd}${fileName}`]);
          return `File ${fileName} created`;
        }
        return 'touch: file already exists or invalid name';
      },
    },
    cd: {
      execute: (dirName) => {
        if (fileSystem.includes(`${cwd}${dirName}`) && dirName) {
          setCwd(`${cwd}${dirName}/`);
          return `Changed directory to ${dirName}`;
        }
        return 'cd: directory not found';
      },
    },
  };

  // Function to handle the command input
  const handleCommand = (command) => {
    const [cmd, ...args] = command.trim().split(' ');
    const commandObj = commands[cmd];

    let output = `$ ${command}\n`; // Start output with the command

    if (commandObj) {
      output += commandObj.execute(...args) + '\n'; // Execute the command with arguments
    } else {
      output += `${cmd}: command not found\n`;
    }

    setBashOutput((prevOutput) => prevOutput + output); // Update the output
    setInputValue(''); // Reset the input field for the next command

    // Scroll to the bottom of the terminal to show the latest output
    setTimeout(() => {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }, 0);
  };

  // Switch active tab
  const switchTab = (index) => {
    setActiveTab(index);
  };

  // Handle key press events in the editable area
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputValue);
    }
  };

  // Handle the input change and remove $ prefix from displayed text
  const handleInputChange = (e) => {
    setInputValue(e.target.innerText.replace('$ ', ''));
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          marginBottom: '0',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          zIndex: 1,
          position: 'relative',
          backgroundColor: '#333',
        }}
      >
        <button
          onClick={() => switchTab(0)}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: activeTab === 0 ? '#bee239' : '#444',
            color: '#fff',
            border: 'none',
            borderTopLeftRadius: '8px',
            borderBottom: '1px solid #bee239',
          }}
        >
          Output
        </button>
        <button
          onClick={() => switchTab(1)}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: activeTab === 1 ? '#bee239' : '#444',
            color: '#fff',
            border: 'none',
            borderTopRightRadius: '8px',
            borderBottom: '1px solid #bee239',
          }}
        >
          Bash
        </button>
      </div>

      {/* Terminal Input and Output Area */}
      <div style={{ width: '100%', height: 'calc(100% - 40px)', position: 'relative' }}>
        <div
          ref={terminalRef}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1B2B34',
            border: '2px solid #bee239',
            borderRadius: '0px 0px 8px 8px',
            boxSizing: 'border-box',
            position: 'relative',
            top: '0',
            zIndex: 0,
            padding: '10px',
            whiteSpace: 'pre-wrap', // To preserve newlines and formatting
            fontFamily: 'monospace',
            color: '#E8E8E8',
            fontSize: '14px',
            overflowY: 'auto', // Allow scrolling when content overflows
          }}
        >
          {/* Show output based on the active tab */}
          {activeTab === 0 && <div>Welcome to the terminal output area!</div>}
          {activeTab === 1 && (
            <div>
              {/* Display the output first */}
              <div>{bashOutput}</div>

              {/* Terminal-like container that is editable for user input */}
              <div
                contentEditable
                onInput={handleInputChange} // Sync the input with the state and add $ symbol
                onKeyDown={handleKeyDown}
                style={{
                  outline: 'none',
                  width: '100%',
                  minHeight: '20px',
                  padding: '8px',
                  fontSize: '14px',
                  backgroundColor: '#1B2B34', // Set the input background color to match the output area
                  color: '#E8E8E8',
                  border: 'none',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {/* The user input area */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Xterm;
