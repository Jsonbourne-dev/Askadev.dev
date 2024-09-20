import React from 'react';
import styled from 'styled-components';
import { Wrapper, Text } from '../styled-components'; 

const Tabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          className={selectedTab === tab ? 'selected' : ''}
          onClick={() => onTabChange(tab)}
        >
          <Text variant="tab">{tab}</Text>
        </Tab>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled(Wrapper)`
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  background: linear-gradient(145deg, #333333, #000000);
  overflow: hidden;
  max-width: 600px;

  @media (max-width: 900px) {
    height: 30px;
    max-width: 100%;
  }
`;

const Tab = styled.div`
  flex: 1;
  padding: 6px;
  color: var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-right: 1px solid var(--primary-color);
  font-size: var(--font-small);

  &:last-child {
    border-right: none;
  }

  &.selected {
    background-color: var(--primary-color);
    color: var(--background-color);
    font-weight: bold;
  }

  &:hover {
    background-color: #00C7B6;
  }

  @media (max-width: 1000px) {
    border-right: none;
    border-bottom: 1px solid var(--primary-color);
  }

  @media (max-width: 900px) {
    font-size: calc(var(--font-small) - 2px);
    padding: 4px;
  }

  @media (max-width: 600px) {
    font-size: calc(var(--font-small) - 4px);
    padding: 2px;
  }
`;

export default Tabs;
