import React from 'react';
import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import history from '~/services/history';

import './config/ReactotronConfig';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer
        autoClose={5000}
        position="top-right"
        className="toast-container"
        toastClassName="dark-toast"
      />
    </Router>
  );
}

export default App;
