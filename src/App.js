import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import SignupPage from './signupPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
