import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../layouts/MainLayout';
import ConfirmEmail from '../pages/ConfirmEmail';
import EmailSent from '../pages/EmailSent';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="email-sent" element={<EmailSent />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route element={<PrivateRoute role="user" />}>
            <Route path="user-dashboard" element={<UserDashboard />} />
          </Route>
          <Route element={<PrivateRoute role="admin" />}>
            <Route path="admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
