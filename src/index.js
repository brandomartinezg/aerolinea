import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Airport from './components/Airport';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Airport />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
