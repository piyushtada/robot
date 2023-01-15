// react is the main engine that runs and do all the things for us.
import React from 'react';
// here is the tool set that lets us react with the virtual dom that react creates.
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// we are selecting the root from our public/index.html and updating 
const root = ReactDOM.createRoot(document.getElementById('root'));
// this render function is creating the app we see on the server
root.render(
  // strictMode what it does is use only the features available in the latest version 
  // we don't use depricated things
  // app is the whole app we are seeing in the browser
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
