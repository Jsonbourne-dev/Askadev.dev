import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions, addAnswer } from '../redux/actions/questionsActions';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Styled Components
const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  font-family: 'Press Start 2P', cursive;
  color: #00FFFF;
  background-color: #000000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const PageContainer = styled.div`
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

const ContentWrapper = styled.div`
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

const Button = styled.button`
  background: #FFFF00;
  border: 4px solid #e1b91e;
  border-radius: 6px;
  color: #000000;
  padding: 12px 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  box-shadow: 0 6px 0 #5e5e5e, inset 0 1px 2px rgba(63, 63, 63, 0.3);

  &:active {
    background: #E1B91E;
    border-color: #D0A10D;
    box-shadow: 0 2px 0 #D0A10D, inset 0 1px 2px rgba(66, 66, 66, 0.5);
    transform: translateY(2px);
  }
`;

const BackButton = styled(Button)`
  margin-bottom: 20px;
  align-self: flex-start;
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
`;

const QuestionContainer = styled.div`
  background: #1c1c1c;
  padding: 20px;
  color: #f0f0f0;
  border: 2px solid #FFFF00;
  margin-bottom: 20px;
`;

const QuestionTitle = styled.h1`
  font-size: 1.6rem;
  color: #00FFFF;
  margin-bottom: 10px;
`;

const QuestionDate = styled.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 15px;
`;

const QuestionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SubmitAnswer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextArea = styled.textarea`
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

const AnswersList = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 1.4rem;
    color: #00FFFF;
    margin-bottom: 10px;
  }
`;

const AnswerItem = styled.div`
  background: #333;
  border: 2px solid #FFFF00;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #FFFF00;
`;

const AceEditorWrapper = styled.div`
  width: 100%;
  position: relative;
  border: 2px solid #FFFF00;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 20px;
`;

const StyledAceEditor = styled(AceEditor)`
  width: 100% !important;
  border: none;
  box-sizing: border-box;
  border-radius: 0;
`;

const QuestionDetail = () => {
  const { did } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [code, setCode] = useState(''); // Code editor state
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    dispatch(setQuestions(storedQuestions));
  }, [dispatch]);

  useEffect(() => {
    const foundQuestion = questions.find(q => q.DID === did);
    if (foundQuestion) {
      foundQuestion.answers = Array.isArray(foundQuestion.answers) ? foundQuestion.answers : [];
      setQuestion(foundQuestion);
    }
  }, [did, questions]);

  const handleSubmitAnswer = () => {
    if (answer.trim() === '' && code.trim() === '') return;

    const newAnswer = {
      text: answer,
      code: code,
      did: did,
      date: new Date().toISOString()
    };

    dispatch(addAnswer(did, newAnswer));

    const updatedQuestions = questions.map(q => {
      if (q.DID === did) {
        q.answers = Array.isArray(q.answers) ? q.answers.concat(newAnswer) : [newAnswer];
      }
      return q;
    });

    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    setAnswer('');
    setCode('');
    setMessage('Answer submitted successfully!');
  };

  const handleEditorLoad = useCallback((editor) => {
    if (editor) {
      const resizeEditor = () => {
        const lines = editor.getSession().getDocument().getLength();
        const lineHeight = editor.renderer.lineHeight;
        const newHeight = lines * lineHeight + 10;
        editor.container.style.height = `${newHeight}px`;
        editor.resize();
      };
      
      resizeEditor();
      editor.getSession().on('change', resizeEditor);
    }
  }, []);

  const createInitialCode = () => {
    return Array(20).fill(' ').join('\n');
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <GlobalStyles>
      <PageContainer>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        </Helmet>
        <ContentWrapper>
          <BackButton onClick={() => navigate(-1)}>Back</BackButton>
          <QuestionContainer>
            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionDate>{new Date(question.date).toLocaleDateString()}</QuestionDate>
            <QuestionText>{question.text}</QuestionText>
            {question.code && (
              <AceEditorWrapper>
                <StyledAceEditor
                  mode="javascript"
                  theme="monokai"
                  value={question.code}
                  readOnly
                  setOptions={{ useWorker: false }}
                  onLoad={handleEditorLoad}
                />
              </AceEditorWrapper>
            )}
          </QuestionContainer>
          <SubmitAnswer>
            <TextArea
              placeholder="Your Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <AceEditorWrapper>
              <StyledAceEditor
                mode="javascript"
                theme="monokai"
                value={code || createInitialCode()} 
                onChange={(newCode) => setCode(newCode)}
                setOptions={{ useWorker: false }}
                onLoad={handleEditorLoad}
              />
            </AceEditorWrapper>
            <SubmitButton onClick={handleSubmitAnswer}>Submit Answer</SubmitButton>
            {message && <p>{message}</p>}
          </SubmitAnswer>
          {question.answers.length > 0 && (
            <AnswersList>
              <h2>Answers</h2>
              {question.answers.map((ans, index) => (
                <AnswerItem key={index}>
                  <p>{ans.text}</p>
                  {ans.code && (
                    <AceEditorWrapper>
                      <StyledAceEditor
                        mode="javascript"
                        theme="monokai"
                        value={ans.code}
                        readOnly
                        setOptions={{ useWorker: false }}
                        onLoad={handleEditorLoad}
                      />
                    </AceEditorWrapper>
                  )}
                  <small>{new Date(ans.date).toLocaleDateString()}</small>
                </AnswerItem>
              ))}
            </AnswersList>
          )}
        </ContentWrapper>
      </PageContainer>
    </GlobalStyles>
  );
};

export default QuestionDetail;
