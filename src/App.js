// we need to import componet because we want to use classes
import { Component} from 'react';
// this is loading our logo
import logo from './logo.svg';
// this is getting the css related to the app
import './App.css';

// how the same thing will look into a class
class App extends Component {
  // we need to call this method if we want to add something
  // to class before it is constructed
  constructor(){
    super();
    this.state = {
      name: 'piyush'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <h1> {this.state.name}</h1>
         <button> Change name</button>
        </header>
      </div>
    );

  }
}

// // the function returns the html/ jsx which will define our app
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
