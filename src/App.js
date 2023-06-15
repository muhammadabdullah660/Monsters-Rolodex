import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./Components/CardList/cardListComponent";
import SearchBox from "./Components/SearchBox/searchBoxComponent";

//Pure Function is a function that given the same input will always return the same output
// it doesn't depend on anything else in the program
// it doesn't change anything in the program
// it doesn't have any side effects
//Impure Function is a function that given the same input will not always return the same output
// it depends on something else in the program
// it changes something in the program
// it has side effects
//Side Effects are anything that affects something outside of the scope of the function
// for example: changing a variable outside of the function, changing the dom, making an http request, etc

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1>Monster's Rolodex </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster Name"
        name="searchMonster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
