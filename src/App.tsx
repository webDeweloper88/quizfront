import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './Router';
import { store } from './store';
import './App.scss'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
