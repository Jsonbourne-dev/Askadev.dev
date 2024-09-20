import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { updateQuestionViews } from '../redux/actions/questionsActions';
import QuestionBox from './QuestionBox';

const QuestionContainer = ({ date, title, questionText, flags = [], votes, answers, views, code, DID }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateQuestionViews(DID));
    navigate(`/question/${DID}`);
  };

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <QuestionBox
        date={date}
        title={title}
        questionText={questionText}
        flags={flags}
        votes={votes}
        answers={answers}
        views={views}
        onClick={handleClick}
      />
    </>
  );
};

export default QuestionContainer;
