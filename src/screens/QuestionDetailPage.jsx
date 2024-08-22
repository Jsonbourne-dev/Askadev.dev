import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions, addAnswer } from '../redux/actions/questionsActions';
import { Helmet } from 'react-helmet';
import { 
  Button, 
  CodeEditor, 
  FormHeader, 
  FormHeaderWrapper, 
  FormItem, 
  FormWrapper, 
  Input, 
  PageContainer, 
  TextArea, 
  QuestionDetailGlobalStyles, 
  QuestionDetailAnswersList, 
  QuestionDetailAnswerItem 
} from '../styled-components';

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
    <QuestionDetailGlobalStyles>
      <PageContainer>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        </Helmet>
        <FormWrapper>
          <FormHeaderWrapper>
            <FormHeader>Question Detail</FormHeader>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </FormHeaderWrapper>
          <FormItem>
            <h1>{question.title}</h1>
            <p>{new Date(question.date).toLocaleDateString()}</p>
            <p>{question.text}</p>
            {question.code && (
              <CodeEditor
                mode="javascript"
                theme="monokai"
                value={question.code}
                readOnly
                setOptions={{ useWorker: false }}
                onLoad={handleEditorLoad}
              />
            )}
          </FormItem>
          <FormItem>
            <TextArea
              placeholder="Your Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <CodeEditor
              mode="javascript"
              theme="monokai"
              value={code || createInitialCode()}
              onChange={(newCode) => setCode(newCode)}
              setOptions={{ useWorker: false }}
              onLoad={handleEditorLoad}
            />
          </FormItem>
          <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
          {message && <p>{message}</p>}
        </FormWrapper>
        {question.answers && question.answers.length > 0 && (
          <QuestionDetailAnswersList>
            <h2>Answers</h2>
            {question.answers.map((ans, index) => (
              <QuestionDetailAnswerItem key={index}>
                <p>{ans.text}</p>
                {ans.code && (
                  <CodeEditor
                    mode="javascript"
                    theme="monokai"
                    value={ans.code}
                    readOnly
                    setOptions={{ useWorker: false }}
                    onLoad={handleEditorLoad}
                  />
                )}
                <p><i>{new Date(ans.date).toLocaleDateString()}</i></p>
              </QuestionDetailAnswerItem>
            ))}
          </QuestionDetailAnswersList>
        )}
      </PageContainer>
    </QuestionDetailGlobalStyles>
  );
};

export default QuestionDetail;
