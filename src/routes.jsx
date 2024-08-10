import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Community from './screens/Community';
import AskQuestionPage from './components/AskQuestionPage';
import QuestionDetail from './components/QuestionDetail';

const RouterPage = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/community/*" element={<Community />} />
        <Route path="/askquestion/:did" element={<AskQuestionPage />} />
        <Route path="/question/:did" element={<QuestionDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterPage;
