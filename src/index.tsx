import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { Provider } from 'react-redux';
// import store from './components/Store';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider theme={{}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>
);
