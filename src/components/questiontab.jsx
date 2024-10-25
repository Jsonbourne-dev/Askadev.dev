import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Button } from '../styled-components';
import AskAQuestion from './Askaquestion';
import { useSelector } from 'react-redux'; // Import useSelector for accessing Redux store

function QuestionTab() {
  const [activeTab, setActiveTab] = useState('Newest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Access isSignedIn from the Redux store
  const isSignedIn = useSelector((state) => state.user.isSignedIn); // Ensure the path matches your Redux structure

  const openModal = () => {
    if (!isSignedIn) {
      // If not signed in, redirect to signup page
      window.location.href = '/#/signup';
    } else {
      // If signed in, open the modal
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SearchAndTabsContainer>
      <SearchContainer>
        <SearchBar>
          <IconWrapper>
            <FaSearch />
          </IconWrapper>
          <Input type="text" placeholder="Search..." />
        </SearchBar>
      </SearchContainer>

      <ButtonAndTabsContainer>
        <TabsContainer>
          <Tab
            isActive={activeTab === 'Newest'}
            onClick={() => setActiveTab('Newest')}
            isFirst
          >
            Newest
          </Tab>
          <Tab
            isActive={activeTab === 'Unanswered'}
            onClick={() => setActiveTab('Unanswered')}
          >
            Unanswered
          </Tab>
          <Tab
            isActive={activeTab === 'Bountied'}
            onClick={() => setActiveTab('Bountied')}
          >
            Bountied
          </Tab>
          <Tab
            isActive={activeTab === 'Active'}
            onClick={() => setActiveTab('Active')}
            isLast
          >
            Active
          </Tab>
        </TabsContainer>
        <StyledButton variant="desktop-filled" fullWidth onClick={openModal}>
          Ask Question
        </StyledButton>
      </ButtonAndTabsContainer>

      {/* Conditionally render the AskAQuestion modal */}
      {isModalOpen && <AskAQuestion onClose={closeModal} />}
    </SearchAndTabsContainer>
  );
}

export default QuestionTab;

const SearchAndTabsContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 98%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  margin-bottom: 10px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding: 0 20px; /* Reduced padding for smaller screens */
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid darkgrey;
  border-radius: 8px;
  padding: 5px;
  height: 40px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    height: 35px; /* Slightly smaller height for mobile */
  }
`;

const IconWrapper = styled.div`
  padding: 0 5px;
  color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 16px;
  color: lightgrey;
  padding-left: 5px;
  background: transparent;

  &::placeholder {
    color: lightgrey;
    font-size: 16px;
  }
`;

const ButtonAndTabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  margin-bottom: 20px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column; /* Stack button below search bar */
    padding: 0 20px; /* Reduced padding for smaller screens */
    align-items: stretch; 
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: auto;
  border: 2px solid #BEE239;
  border-radius: 11px;
  overflow: hidden;
  height: 40px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'black' : 'white')};
  background-color: ${({ isActive }) => (isActive ? '#BEE239' : 'transparent')};
  transition: background-color 0.3s, color 0.3s;
  font-size: 18px;
  font-family: 'Outfit', sans-serif;
  font-weight: bold;
  padding: 8px 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: #666;
    display: ${({ isLast }) => (isLast ? 'none' : 'block')};
  }

  border-top-left-radius: ${({ isFirst }) => (isFirst ? '8px' : '0')};
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? '8px' : '0')};
  border-top-right-radius: ${({ isLast }) => (isLast ? '8px' : '0')};
  border-bottom-right-radius: ${({ isLast }) => (isLast ? '8px' : '0')};

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? '#BEE239' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const StyledButton = styled(Button)`
  width: 100%; 
  margin-top: 10px; 
`;
