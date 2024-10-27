import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AnswerQuesion = () => {
    const { uuid } = useParams(); 
    const questions = useSelector((state) => state.questions.questions); 

    const questionData = questions.find((question) => question.uuid === uuid);

    return (
        <div>
            {questionData ? ( 
                <>
                    <h1>{questionData.title}</h1>
                    <h2>{questionData.subtitle}</h2>
                    <p>{questionData.question}</p>
                    <h3>Details:</h3>
                    <p>Views: {questionData.views}</p>
                    <p>Votes: {questionData.votes}</p>
                    <p>Answers: {questionData.answers}</p>
                    <h4>Asked by: {questionData.username}</h4>
                    <p>Created at: {new Date(questionData.createdAt).toLocaleString()}</p>

                </>
            ) : (
                <h1>Question not found</h1> 
            )}
        </div>
    );
};

export default AnswerQuesion;
