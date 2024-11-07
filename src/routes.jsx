import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Community from './screens/Community';
import Test from './screens/Test';
import Developer from './screens/Developer';
import Docs from './screens/Docs';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp'
import AnswerQuesion from './screens/AnswerQuestion';
import UserProfile from './screens/UserProfile';
import MultiplayerConnect from './screens/MultiplayerConnect'
import Multiplayer from './screens/Multiplayer';

const RouterPage = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/community" element={<Community />} />
        <Route path="/develop" element={<Developer />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/answerquestion/:uuid" element={<AnswerQuesion />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/multiplayerconnect" element={<MultiplayerConnect />} />
        <Route path="/multiplayer/:uuid" element={<Multiplayer />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterPage;
