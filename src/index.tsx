import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
    <MantineProvider theme={{}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>,
  document.getElementById('root')
);