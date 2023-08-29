
import React from 'react';
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import LandingPage from './Routes/landing';
import MainNav from './Components/mainNav';
import Login from './Routes/Login';
import Enroll from './Routes/Enroll';

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
