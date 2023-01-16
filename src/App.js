// we need to import componet because we want to use classes
import { Component} from 'react';
// this is loading our logo
import logo from './logo.svg';
// this is getting the css related to the app
import './App.css';

// the function returns the html/ jsx which will define our app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
