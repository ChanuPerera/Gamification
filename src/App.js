
import React from 'react';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import LandingPage from './Routes/landing';
import MainNav from './Components/mainNav';
import Login from './Routes/Login';
import Enroll from './Routes/Enroll';
import QuizContent from './Routes/quizContent';
import CreateProfile from './Routes/createProfile';
import ProfileCreationLoading from './Routes/profileCreationLoading';
import PlayerDashboard from './Routes/Dashboard';
import Courses from './Routes/Courses';
import MyProfile from './Routes/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <RouterOutlet />
      <ToastContainer />
    </BrowserRouter>
  );
}

function RouterOutlet() {
  const element = useRoutes([
    { path: '/', element: <MainNavWrapper /> },
    { path: 'Login', element: <Login /> },
    { path: 'Enroll', element: <Enroll /> },
    { path: 'QuizContent', element: <QuizContent /> },
    { path: 'ProfileCreationLoading', element: <ProfileCreationLoading /> },
    { path: 'CreateProfile', element: <CreateProfile /> },
    { path: 'PlayerDashboard', element: <PlayerDashboard /> },
    { path: 'Courses', element: <Courses /> },
    { path: 'MyProfile', element: <MyProfile /> },
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
