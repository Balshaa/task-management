import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

ReactDOM.render(
  <Provider store={store}>
    <MantineProvider theme={{}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </Provider>,
  document.getElementById('root')
);