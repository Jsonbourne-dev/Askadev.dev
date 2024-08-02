import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Community from './screens/Community';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
