import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiChevronRight, FiChevronDown, FiMoreHorizontal } from 'react-icons/fi';
import { Tooltip } from '../styled-components'; // Import Tooltip component

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #11131a;
    color: black;
    width: 250px;
    height: ${({ height }) => height || '100vh'}; /* Accept height prop */
    border: 2px solid #BEE239;
    border-radius: 4px;
    padding: 10px;
    overflow-y: auto;
`;

const Folder = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px 8px;
    cursor: pointer;
    font-weight: bold;
    color: ${({ open }) => open ? '#BEE239' : '#A0A0A0'};
    background-color: transparent;
    border-radius: 4px;
    margin-bottom: 4px;
    height: 28px;

    &:hover {
        background-color: #2C3138;
        color: #BEE239;
    }
`;

const FileList = styled.div`
    padding-left: 20px;
    margin-top: 5px;
    display: ${({ open }) => open ? 'block' : 'none'};
`;

const File = styled.div`
    padding: 5px 10px;
    color: ${({ selected }) => selected ? '#BEE239' : '#A0A0A0'};
    border-radius: 4px;
    margin-bottom: 4px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;

    &:hover {
        background-color: #2C3138;
        color: #BEE239;
    }
`;

const ToggleButton = styled.span`
    cursor: pointer;
    font-size: 16px;
    color: white;
    margin-right: 10px;
    transition: transform 0.6s ease-in-out;
    transform-origin: center;
    transform: ${({ open }) => open ? 'rotate(360deg)' : 'rotate(0deg)'};
`;

const OptionsContainer = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    margin-left: auto;

    &:hover {
        background-color: #A0A0A0;
    }
`;

const FolderWithOptions = styled(Folder)`
    position: relative;
    display: flex;
    align-items: center;

    &:hover > ${OptionsContainer} {
        display: flex;
    }
`;

const FileWithOptions = styled(File)`
    position: relative;

    &:hover > ${OptionsContainer} {
        display: flex;
    }
`;

const FolderNameInput = styled.input`
    background: transparent;
    border: none;
    color: #BEE239;
    font-weight: bold;
    font-size: 14px;
    width: auto;
    outline: none;
    margin-left: 10px;
    color: ${({ open }) => open ? '#BEE239' : '#A0A0A0'};
`;

const FileNameInput = styled.input`
    background: transparent;
    border: none;
    color: #BEE239;
    font-weight: bold;
    font-size: 14px;
    width: auto;
    outline: none;
    margin-left: 10px;
`;

const FileManager = ({ height }) => { // Accept height prop here
    const [openFolders, setOpenFolders] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [folders, setFolders] = useState({
        folder1: {
            name: 'Folder 1',
            files: ['File 1-1.js', 'File 1-2.js'],
            folders: {
                nestedFolder1: {
                    name: 'Nested Folder 1',
                    files: ['File 1-1-1.js', 'File 1-1-2.js'],
                    folders: {} 
                }
            }
        },
        folder2: {
            name: 'Folder 2',
            files: ['File 2-1.css', 'File 2-2.css'],
            folders: {}
        },
        folder3: {
            name: 'Folder 3',
            files: ['File 3-1.md', 'File 3-2.md'],
            folders: {}
        }
    });

    const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, itemName: '', type: '' });
    const [editingFolder, setEditingFolder] = useState(null);
    const [newFolderName, setNewFolderName] = useState('');
    const [editingFile, setEditingFile] = useState(null);
    const [newFileName, setNewFileName] = useState('');

    const tooltipRef = useRef(null);

    const toggleFolder = (folderName) => {
        setOpenFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    const handleFileClick = (fileName) => {
        setSelectedFile(fileName);
    };

    const handleOptionClick = (e, name, type) => {
        e.stopPropagation();
        const { clientX: x, clientY: y } = e;
        setTooltip({ show: true, x, y, itemName: name, type });
    };

    const handleDeleteFolder = () => {
        const { itemName } = tooltip;
        setFolders((prev) => {
            const newFolders = { ...prev };
            delete newFolders[itemName];
            return newFolders;
        });
        setTooltip({ show: false, x: 0, y: 0, itemName: '', type: '' });
    };

    const handleRenameFolder = () => {
        const { itemName } = tooltip;
        setEditingFolder(itemName);
        setNewFolderName(folders[itemName].name);
    };

    const handleSaveFolderName = (folderName) => {
        setFolders((prev) => {
            const newFolders = { ...prev };
            newFolders[folderName].name = newFolderName;
            return newFolders;
        });
        setEditingFolder(null);
        setNewFolderName('');
    };

    const handleDeleteFile = () => {
        const { itemName } = tooltip;
        setFolders((prev) => {
            const newFolders = { ...prev };
            Object.keys(newFolders).forEach((folderKey) => {
                newFolders[folderKey].files = newFolders[folderKey].files.filter(file => file !== itemName);
            });
            return newFolders;
        });
        setTooltip({ show: false, x: 0, y: 0, itemName: '', type: '' });
    };

    const handleRenameFile = () => {
        const { itemName } = tooltip;
        setEditingFile(itemName);
        setNewFileName(itemName);
    };

    const handleSaveFileName = (fileName) => {
        const { itemName } = tooltip;
        setFolders((prev) => {
            const newFolders = { ...prev };
            Object.keys(newFolders).forEach((folderKey) => {
                newFolders[folderKey].files = newFolders[folderKey].files.map((file) =>
                    file === itemName ? newFileName : file
                );
            });
            return newFolders;
        });
        setEditingFile(null);
        setNewFileName('');
    };

    const handleAddFile = () => {
        const { itemName } = tooltip;
        const newFileName = prompt('Enter new file name:');
        if (newFileName) {
            setFolders((prev) => {
                const newFolders = { ...prev };
                newFolders[itemName].files.push(newFileName);
                return newFolders;
            });
        }
        setTooltip({ show: false, x: 0, y: 0, itemName: '', type: '' });
    };

    const handleAddFolder = () => {
        const { itemName, type } = tooltip;
        const newFolderName = prompt('Enter new folder name:');
        if (newFolderName) {
            setFolders((prev) => {
                const newFolders = { ...prev };
                if (type === 'folder') {
                    newFolders[itemName].folders[newFolderName] = {
                        name: newFolderName,
                        files: [],
                        folders: {},
                    };
                }
                return newFolders;
            });
        }
        setTooltip({ show: false, x: 0, y: 0, itemName: '', type: '' });
    };

    const renderFolders = (folderObject) => {
        return Object.entries(folderObject).map(([folderKey, folder]) => (
            <div key={folderKey}>
                <FolderWithOptions
                    open={openFolders[folderKey]}
                    onClick={() => toggleFolder(folderKey)}
                >
                    {openFolders[folderKey] ? (
                        <ToggleButton open={openFolders[folderKey]}>
                            <FiChevronDown />
                        </ToggleButton>
                    ) : (
                        <ToggleButton open={openFolders[folderKey]}>
                            <FiChevronRight />
                        </ToggleButton>
                    )}
                    {editingFolder === folderKey ? (
                        <FolderNameInput
                            value={newFolderName}
                            onChange={(e) => setNewFolderName(e.target.value)}
                            onBlur={() => handleSaveFolderName(folderKey)}
                            autoFocus
                        />
                    ) : (
                        <span>{folder.name}</span>
                    )}
                    <OptionsContainer onClick={(e) => handleOptionClick(e, folderKey, 'folder')}>
                        <FiMoreHorizontal />
                    </OptionsContainer>
                </FolderWithOptions>

                <FileList open={openFolders[folderKey]}>
                    {folder.files.map((file, index) => (
                        <FileWithOptions
                            key={index}
                            selected={selectedFile === file}
                            onClick={() => handleFileClick(file)}
                        >
                            {editingFile === file ? (
                                <FileNameInput
                                    value={newFileName}
                                    onChange={(e) => setNewFileName(e.target.value)}
                                    onBlur={() => handleSaveFileName(file)}
                                    autoFocus
                                />
                            ) : (
                                <span>{file}</span>
                            )}
                            <OptionsContainer onClick={(e) => handleOptionClick(e, file, 'file')}>
                                <FiMoreHorizontal />
                            </OptionsContainer>
                        </FileWithOptions>
                    ))}
                    {/* Render nested folders */}
                    {folder.folders && renderFolders(folder.folders)}
                </FileList>
            </div>
        ));
    };

    // Close the tooltip when clicking outside of it
    const closeTooltip = () => setTooltip({ show: false, x: 0, y: 0, itemName: '', type: '' });

    return (
        <Container height={height}> {/* Pass height prop to Container */}
            {renderFolders(folders)}
            
            {/* Tooltip component */}
            <Tooltip
                show={tooltip.show}
                x={tooltip.x}
                y={tooltip.y}
                type={tooltip.type}
                itemName={tooltip.itemName}
                handleRenameFolder={handleRenameFolder}
                handleDeleteFolder={handleDeleteFolder}
                handleRenameFile={handleRenameFile}
                handleDeleteFile={handleDeleteFile}
                handleAddFile={handleAddFile} // New Add File function
                handleAddFolder={handleAddFolder} // New Add Folder function
                closeTooltip={closeTooltip} // Pass closeTooltip handler here
            />
        </Container>
    );
};

export default FileManager;
