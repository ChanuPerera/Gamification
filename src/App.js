
import React from 'react';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import LandingPage from './Routes/landing';
import MainNav from './Components/mainNav';
import Login from './Routes/Login';
import Enroll from './Routes/Enroll';
import QuizContent from './Routes/quizContent';
import CreateProfile from './Routes/createProfile';

function App() {
  return (
    <BrowserRouter>
      <RouterOutlet />
    </BrowserRouter>
  );
}

function RouterOutlet() {
  const element = useRoutes([
    { path: '/', element: <MainNavWrapper /> },
    { path: 'Login', element: <Login /> },
    { path: 'Enroll', element: <Enroll /> },
    { path: 'QuizContent', element: <QuizContent /> },
    { path: 'CreateProfile', element: <CreateProfile /> },
  ]);

  return element;
}

function MainNavWrapper({ children }) {
  return (
    <>
      <MainNav />
      {<LandingPage/>}
    </>
  );
}

export default App;
