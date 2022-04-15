import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './finalComponents/landingPage';
import SignupPage from './finalComponents/signupPage';
import LoginPage from './finalComponents/loginPage';
import ForgotPasswordPage from './finalComponents/forgotPasswordPage';
import ClientDashboard from './finalComponents/clientDashboard';
import { PrivateRoute, PublicRoute } from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <ClientDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
