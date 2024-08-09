import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useAppSelector } from '../utils/Hooks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const MainLayout: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header user={user} />
      <Container maxWidth="lg" sx={{ flexGrow: 1, marginTop: 4 }}>
        <Breadcrumbs />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
