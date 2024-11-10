import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiEdit, FiTrash, FiPlus } from 'react-icons/fi';

// Tooltip container
const TooltipContainer = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background-color: #2b2f36;
  color: #f4f4f4;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1000;
  width: 200px;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.2s ease-in-out;
`;

// Tooltip button
const TooltipButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #444d56;
    transform: translateX(2px);
  }

  svg {
    margin-right: 10px;
    font-size: 16px;
  }

  span {
    font-weight: 500;
    font-size: 15px;
  }
`;

// Main Tooltip component
const Tooltip = ({
  show,
  x,
  y,
  itemName,
  type,
  handleRenameFolder,
  handleDeleteFolder,
  handleRenameFile,
  handleDeleteFile,
  handleAddFile,
  handleAddFolder,
  closeTooltip
}) => {
  const tooltipRef = useRef(null);

  // Close the tooltip if you click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        closeTooltip(); // Close the tooltip when clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeTooltip]);

  const handleRename = () => {
    if (type === 'folder') {
      handleRenameFolder();
    } else if (type === 'file') {
      handleRenameFile();
    }
  };

  const handleDelete = () => {
    if (type === 'folder') {
      handleDeleteFolder();
    } else if (type === 'file') {
      handleDeleteFile();
    }
  };

  const handleAdd = () => {
    if (type === 'folder') {
      handleAddFolder();
    } else if (type === 'file') {
      handleAddFile();
    }
  };

  return (
    <TooltipContainer ref={tooltipRef} show={show} x={x} y={y}>
      <TooltipButton onClick={handleRename}>
        <FiEdit />
        <span>Rename {type === 'folder' ? 'Folder' : 'File'}</span>
      </TooltipButton>
      <TooltipButton onClick={handleDelete}>
        <FiTrash />
        <span>Delete {type === 'folder' ? 'Folder' : 'File'}</span>
      </TooltipButton>
      <TooltipButton onClick={handleAdd}>
        <FiPlus />
        <span>Add {type === 'folder' ? 'Folder' : 'File'}</span>
      </TooltipButton>
    </TooltipContainer>
  );
};

export default Tooltip;
