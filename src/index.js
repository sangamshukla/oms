import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Nav from './Nav';
import Form from './Form'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nav/>
    <Form/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
