import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Community from './screens/Community';
import AskQuestionPage from './components/AskQuestionPage';
import QuestionDetail from './components/QuestionDetail';
import Test from './screens/Test';
import Developer from './screens/Developer';
import Docs from './screens/Docs';
import Profile from './screens/Profile';

const RouterPage = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/community/*" element={<Community />} />
        <Route path="/askquestion/:did" element={<AskQuestionPage />} />
        <Route path="/question/:did" element={<QuestionDetail />} />
        <Route path="/develop" element={<Developer />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterPage;
