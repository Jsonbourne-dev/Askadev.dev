import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './screens/WelcomePage';
import CommunityPage from './screens/CommunityPage';
import AskQuestionPage from './screens/AskQuestionPage';
import QuestionDetail from './components/QuestionDetail';

const RouterPage = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/community/*" element={<CommunityPage />} />
        <Route path="/askquestion/:did" element={<AskQuestionPage />} />
        <Route path="/question/:did" element={<QuestionDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterPage;
