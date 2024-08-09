import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  user: { username: string; role: 'user' | 'admin' } | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Quiz App
          </Link>
        </Typography>
        {user ? (
          <>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {user.username} ({user.role})
            </Typography>
            <Button color="inherit">Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
