import styled, { createGlobalStyle } from 'styled-components';

export const CommunityGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CommunityPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; 
  height: 100%; 
  background-color: #000;
  color: #fff;
  padding-top: 60px; 
  align-items: center;
`;

export const CommunityQuestionPanelContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 60px;
  padding-top: 100px;
`;

export const CommunityQuestionsContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  max-width: 1200px; 
  padding-bottom: 60px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1; 
`;

export const CommunityQuestionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommunityPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto; 
`;

export const CommunityPagination = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 0;
  box-sizing: border-box;
`;

export const CommunityPaginationButton = styled.button`
  border: none;
  background-color: #444;
  color: #fff;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &.active {
    background-color: #007bff;
  }

  &:hover {
    background-color: #555;
  }
`;

export const CommunityFooterContainer = styled.div`
  width: 100%;
  margin-top: auto; 
`;
