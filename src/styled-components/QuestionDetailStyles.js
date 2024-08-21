import styled from 'styled-components';
import AceEditor from 'react-ace';
import Button from './Button';

export const QuestionDetailGlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  background-color: #000000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const QuestionDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const QuestionDetailContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: #000000;
  border: 2px solid #FFFF00;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    max-width: 100%;
    height: auto;
  }
`;

export const QuestionDetailBackButton = styled(Button)`
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const QuestionDetailSubmitButton = styled(Button)`
  align-self: flex-end;
`;

export const QuestionDetailQuestionContainer = styled.div`
  background: #1c1c1c;
  padding: 20px;
  color: #f0f0f0;
  border: 2px solid #FFFF00;
  margin-bottom: 20px;
`;

export const QuestionDetailQuestionTitle = styled.h1`
  font-size: 1.6rem;
  color: #00FFFF;
  margin-bottom: 10px;
`;

export const QuestionDetailQuestionDate = styled.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 15px;
`;

export const QuestionDetailQuestionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const QuestionDetailSubmitAnswer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionDetailTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border: 2px solid #FFFF00;
  background-color: #1b1b1b;
  color: #FFFFFF;
  padding: 10px;
  font-size: 14px;
  resize: none; 
  border-radius: 0;
  box-sizing: border-box;
`;

export const QuestionDetailAnswersList = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 1.4rem;
    color: #00FFFF;
    margin-bottom: 10px;
  }
`;

export const QuestionDetailAnswerItem = styled.div`
  background: #333;
  border: 2px solid #FFFF00;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #FFFF00;
`;

export const QuestionDetailAceEditorWrapper = styled.div`
  width: 100%;
  position: relative;
  border: 2px solid #FFFF00;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const QuestionDetailStyledAceEditor = styled(AceEditor)`
  width: 100% !important;
  border: none;
  box-sizing: border-box;
  border-radius: 0;
`;
