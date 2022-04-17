import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UserDataProvider } from './contexts/UserDataContext';
import LandingPage from './finalComponents/landingPage';
import SignupPage from './finalComponents/signupPage';
import LoginPage from './finalComponents/loginPage';
import ForgotPasswordPage from './finalComponents/forgotPasswordPage';
import { PrivateRoute, PublicRoute } from './PrivateRoute';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
const ClientDashboard = lazy(() => import('./clientDashboard/Structure'));
const ClientDashboardHome = lazy(() => import('./clientDashboard/HomeTab'));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <UserDataProvider>
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
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                      <ClientDashboard />
                    </Suspense>
                  </PrivateRoute>
                }
              >
                <Route path="home" element={<ClientDashboardHome />} />
                <Route path="data-report" />
                <Route path="wa-automation" />
                <Route path="user-settings" />
              </Route>
              <Route path="support" element={<h1>To Do</h1>} />
            </Routes>
          </Router>
        </UserDataProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
