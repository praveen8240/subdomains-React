import React from 'react';
import { Route, Routes } from 'react-router';
import MainHome from '../homes/MainHome';

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainHome />} />
    </Routes>
  );
};

export default MainRouter;
