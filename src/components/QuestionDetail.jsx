import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions, addAnswer } from '../redux/actions/questionsActions';
import './components_css/QuestionDetail.css';

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
    <div className="question-detail-container">
      <div className="left-panel">
        <button className="back-button" onClick={handleBackClick}>Back</button>
        <div className="question-container">
          <h1 className="question-title">{question.title}</h1>
          <p className="question-date">{new Date(question.date).toLocaleDateString()}</p>
          <p className="question-text">{question.questionText}</p>
          {question.code && (
            <div className="ace-editor-container">
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
            </div>
          )}
          <div className="submit-answer">
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
          </div>
          {question.answers && question.answers.length > 0 && (
            <div className="answers-list">
              <h2>Answers ({question.answers.length})</h2>
              {question.answers.map((ans, index) => (
                <div key={index} className="answer-item">
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
                </div>
              ))}
            </div>
          )}
          {message && (
            <div className="message-container">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
