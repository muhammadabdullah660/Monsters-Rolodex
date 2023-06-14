import "./App.css";
import { Component } from "react";
import CardList from "./Components/CardList/cardListComponent";
import SearchBox from "./Components/SearchBox/searchBoxComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //console.log("constructor");
  }

  componentDidMount() {
    //console.log("componentDidMount");
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
  // this method is called before the component is rendered(doesn't reinitialize the on every event)
  // not unnecessary re-rendering
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField: searchField,
      };
    });
  };
  render() {
    //console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monster Name"
          name="searchMonster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
