import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions, addAnswer } from '../redux/actions/questionsActions';
import styled from 'styled-components';

const QuestionDetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  background: #1b1b1b;
  border-right: 2px solid #333;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

const AceEditorContainer = styled.div`
  margin-top: 20px;
  border: 2px solid #FFD700;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const QuestionContainer = styled.div`
  background: #2c2c2c;
  border-radius: 12px;
  padding: 20px;
  color: #f0f0f0;
`;

const QuestionTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #FFD700;
  margin-bottom: 15px;
`;

const QuestionDate = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 15px;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  color: #00FFFF;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const SubmitAnswer = styled.div`
  background: #333;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #f0f0f0;

  textarea {
    width: 100%;
    height: 120px;
    border: 2px solid #FFD700;
    border-radius: 8px;
    background-color: #1b1b1b;
    color: #FFF;
    padding: 12px;
    font-family: 'Courier New', Courier, monospace;
  }

  button {
    background: #FFD700;
    border: none;
    border-radius: 8px;
    color: #000000;
    padding: 12px 25px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: #FFC107;
      transform: scale(1.05);
    }
  }
`;

const AnswersList = styled.div`
  h2 {
    font-size: 1.5rem;
    color: #FFD700;
    margin-bottom: 10px;
  }
`;

const AnswerItem = styled.div`
  background: #444;
  border: 2px solid #FFD700; 
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const MessageContainer = styled.div`
  background: #2c2c2c;
  border-radius: 8px;
  padding: 20px;
  color: #f0f0f0;
  margin-top: 20px;
`;

const MessageItem = styled.div`
  background: #333;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
`;

const BackButton = styled.button`
  background: #FFD700;
  border: none;
  border-radius: 8px;
  color: #000000;
  padding: 12px 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background 0.3s, transform 0.3s;
  margin-bottom: 20px; 

  &:hover {
    background: #FFC107;
  }

  &:focus {
    outline: 2px solid #FFC107;
  }
`;

// Main component
const QuestionDetail = () => {
  const { did } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [code, setCode] = useState('');
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
        q.answers = Array.isArray(q.answers) ? q.answers : [];
        return {
          ...q,
          answers: [...q.answers, newAnswer]
        };
      }
      return q;
    });

    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
    dispatch(setQuestions(updatedQuestions));
    setQuestion(updatedQuestions.find(q => q.DID === did));
    setAnswer('');
    setCode('');

    setMessage({
      text: 'Your answer has been submitted!',
      did: did,
      date: new Date().toISOString()
    });
  };

  const handleBackClick = () => {
    navigate('/community');
  };

  if (!question) return <div>Loading...</div>;

  return (
    <QuestionDetailContainer>
      <LeftPanel>
        <BackButton onClick={handleBackClick}>Back</BackButton>
        <QuestionContainer>
          <QuestionTitle>{question.title}</QuestionTitle>
          <QuestionDate>{new Date(question.date).toLocaleDateString()}</QuestionDate>
          <QuestionText>{question.questionText}</QuestionText>
          {question.code && (
            <AceEditorContainer>
              <AceEditor
                mode="javascript"
                theme="monokai"
                name="questionCodeEditor"
                value={question.code}
                readOnly={true}
                fontSize={14}
                width="100%"
                setOptions={{ useWorker: false }}
                maxLines={Infinity}
                highlightActiveLine={false}
                showGutter={false}
              />
            </AceEditorContainer>
          )}
          <SubmitAnswer>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="answerCodeEditor"
              value={code}
              onChange={(newCode) => setCode(newCode)}
              fontSize={14}
              width="100%"
              height="200px"
              setOptions={{ useWorker: false }}
            />
            <button onClick={handleSubmitAnswer}>Submit Answer</button>
          </SubmitAnswer>
          {question.answers && question.answers.length > 0 && (
            <AnswersList>
              <h2>Answers ({question.answers.length})</h2>
              {question.answers.map((ans, index) => (
                <AnswerItem key={index}>
                  <p>{ans.text}</p>
                  {ans.code && (
                    <AceEditor
                      mode="javascript"
                      theme="monokai"
                      name={`answerCodeEditor-${index}`}
                      value={ans.code}
                      readOnly={true}
                      fontSize={14}
                      width="100%"
                      height="200px"
                      setOptions={{ useWorker: false }}
                    />
                  )}
                  <small>DID: {ans.did}</small>
                  <small>{new Date(ans.date).toLocaleDateString()}</small>
                </AnswerItem>
              ))}
            </AnswersList>
          )}
          {message && (
            <MessageContainer>
              <p>{message.text}</p>
              {message.code && (
                <AceEditor
                  mode="javascript"
                  theme="monokai"
                  name="messageCodeEditor"
                  value={message.code}
                  readOnly={true}
                  fontSize={14}
                  width="100%"
                  height="200px"
                  setOptions={{ useWorker: false }}
                />
              )}
              <small>DID: {message.did}</small>
              <small>{new Date(message.date).toLocaleDateString()}</small>
            </MessageContainer>
          )}
        </QuestionContainer>
      </LeftPanel>
      <RightPanel />
    </QuestionDetailContainer>
  );
};

export default QuestionDetail;
