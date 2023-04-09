import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { store } from './store';
import { store as store1 } from './createStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store1}>
    <App />
  </Provider>
  // </React.StrictMode>
);
