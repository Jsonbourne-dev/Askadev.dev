// src/RouterPage.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Community from './screens/Community';
import AskQuestionPage from './components/AskQuestionPage';
import QuestionDetail from './components/QuestionDetail'

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/community/*" element={<Community />} />
        <Route path="/askquestion/:did" element={<AskQuestionPage />} />
        <Route path="/question/:did" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
