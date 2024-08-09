import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmailSent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Подтверждение Email отправлено
      </Typography>
      <Typography variant="body1" gutterBottom>
        На указанный вами email было отправлено письмо с подтверждением. Пожалуйста, проверьте свою почту и перейдите по ссылке для активации аккаунта.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      >
        Вернуться на главную
      </Button>
    </Box>
  );
};

export default EmailSent;
