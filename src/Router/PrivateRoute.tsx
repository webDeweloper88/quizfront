import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../utils/Hooks';

interface PrivateRouteProps {
  role: 'user' | 'admin';
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role }) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== role) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

