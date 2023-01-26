// we need to import componet because we want to use classes
import { Component} from 'react';
// this is loading our logo
// import logo from './logo.svg';
// this is getting the css related to the app
import './App.css';

// how the same thing will look into a class
class App extends Component {
  // we need to call this method if we want to add something
  // to class before it is constructed
  constructor(){
    super();
    this.state = {
      monsters: [],
    }
  }
  // get data from api before the component is rendered
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      this.setState(
        () => {
          return {monsters: users};
        },
        () => {
          console.log(this.state);
        }
      );
    })
  }
  // explain this function
  render() {
    return (
      <div className="App">
        <input className='search-box' type='text' placeholder='search monsters' onChange={
          (event) => {
            // here we get the search string
            const searchString = event.target.value.toLocaleLowerCase();
            // we use the search string to filter our moster list
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return {monsters: filteredMonsters};
            })
          }} />

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              <p>{monster.email}</p>
            </div>
          );
        })}
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
