import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // this method is called after the component is rendered
    // fetch is a method that allows us to make a request to an api
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
    // fetch returns a promise
    // a promise is an object that represents the eventual completion or failure of an asynchronous operation
  }

  render() {
    console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return {
                searchString: searchString,
              };
            });
          }}
        />
        {filteredMonsters.map((monsters) => (
          <div key={monsters.id}>
            <h1>{monsters.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
