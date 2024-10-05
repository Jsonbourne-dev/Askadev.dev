import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions, addAnswer } from '../redux/actions/questionsActions';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Button, Text, TextInput, Wrapper, Theme } from '../styled-components';

const theme = {
  colors: {
    primary: '#00FFFF',
    background: '#000000',
    border: '#FFFF00',
    text: '#FFFFFF',
    answerItemBackground: '#333333',
    answerItemHighlight: '#555555',
  },
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  overflow-y: auto;

  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

const ContentWrapper = styled(Wrapper)`
  width: 100%;
  max-width: 900px;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const QuestionContainer = styled(Wrapper)`
  background: #1c1c1c;
  padding: 20px;
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.border};
  margin-bottom: 20px;

  @media (max-width: 600px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const SubmitAnswer = styled(Wrapper)`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  margin-top: 20px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AnswersList = styled(Wrapper)`
  margin-top: 20px;

  h2 {
    font-size: var(--font-large);
    color: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
  }
`;

const AnswerItem = styled(Wrapper)`
  background: ${({ isHighlighted }) => (isHighlighted ? props => props.theme.colors.answerItemHighlight : props => props.theme.colors.answerItemBackground)};
  border: 2px solid ${props => props.theme.colors.border};
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.colors.text};
`;

const QuestionDetail = () => {
  const { did } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const question = questions.find(q => q.DID === did) || {};
  const [answer, setAnswer] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (questions.length === 0) {
      const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
      dispatch(setQuestions(storedQuestions));
    }
  }, [dispatch, questions]);

  const handleSubmitAnswer = () => {
    if (answer.trim() === '' && code.trim() === '') return;

    const newAnswer = {
      text: answer,
      code: code,
      did: did,
      date: new Date().toISOString(),
    };

    dispatch(addAnswer(did, newAnswer));

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

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <PageWrapper>
        <ContentWrapper>
          <Button onClick={() => navigate(-1)}>Back</Button>
          <QuestionContainer>
            <Text variant="title">{question.title}</Text>
            <Text variant="small">{new Date(question.date).toLocaleDateString()}</Text>
            <Text>{question.text}</Text>
            {question.code && (
              <TextInput
                isAceEditor
                value={question.code}
                readOnly
                width="100%"
                height="200px"
                border="2px solid var(--border-color)"
                borderRadius="8px"
                onLoad={handleEditorLoad}
              />
            )}
          </QuestionContainer>
          <SubmitAnswer>
            <TextInput
              isAceEditor={false}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your Answer"
              width="100%"
              height="80px"
              border="2px solid var(--border-color)"
              bgColor="#1b1b1b"
              color="var(--text-color)"
              padding="10px"
              fontSize="var(--font-medium)"
              resize="none"
              borderRadius="0"
            />
            <TextInput
              isAceEditor
              value={code || createInitialCode()}
              onChange={(newCode) => setCode(newCode)}
              width="100%"
              height="300px"
              border="2px solid var(--border-color)"
              borderRadius="8px"
              onLoad={handleEditorLoad}
            />
            <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
            {message && <Text variant="small">{message}</Text>}
          </SubmitAnswer>
          {question.answers && question.answers.length > 0 && (
            <AnswersList>
              <Text variant="title">Answers</Text>
              {question.answers.map((ans, index) => (
                <AnswerItem key={index} isHighlighted={index % 2 === 0}>
                  <Text>{ans.text}</Text>
                  {ans.code && (
                    <TextInput
                      isAceEditor
                      value={ans.code}
                      readOnly
                      width="100%"
                      height="200px"
                      border="2px solid var(--border-color)"
                      borderRadius="8px"
                      onLoad={handleEditorLoad}
                    />
                  )}
                  <Text variant="small"><i>{new Date(ans.date).toLocaleDateString()}</i></Text>
                </AnswerItem>
              ))}
            </AnswersList>
          )}
        </ContentWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default QuestionDetail;
