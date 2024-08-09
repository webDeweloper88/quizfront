import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../../api/axios';
import { Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ConfirmEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<string>('loading');
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      axios
        .get(`/auth/confirm-email?token=${token}`)
        .then(() => {
          setStatus('success');
          setTimeout(() => navigate('/login'), 3000); // Перенаправление на страницу входа через 3 секунды
        })
        .catch(() => {
          setStatus('error');
        });
    } else {
      setStatus('error');
    }
  }, [searchParams, navigate]);

  return (
    <Box textAlign="center" mt={4}>
      {status === 'loading' && <CircularProgress />}
      {status === 'success' && (
        <Typography variant="h5" color="success.main">
          Email успешно подтвержден! Вы будете перенаправлены на страницу входа.
        </Typography>
      )}
      {status === 'error' && (
        <Typography variant="h5" color="error.main">
          Ошибка при подтверждении email. Пожалуйста, попробуйте снова или свяжитесь с поддержкой.
        </Typography>
      )}
    </Box>
  );
};

export default ConfirmEmail;
