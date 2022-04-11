import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import SignupPage from './signupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
