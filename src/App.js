import React from "react";

import { SearchBox } from "./component/search-box/search-box.component";
import "./App.css";

import { CardList } from "./component/card-list/card-list.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        this.state.filteredMonsters = monsters;
        this.setState({ monsters: monsters });
      });
  }

  searchMonsters = (e) => {
    const searchInput = e.target.value.toLocaleLowerCase();
    const filteredMonsters = this.state.monsters.filter((monster) => {
      const monsterName = monster.name.toLocaleLowerCase();
      return monsterName.includes(searchInput);
    });
    this.setState({ filteredMonsters: filteredMonsters });
  };

  render() {
    return (
      <div className="App">
        <h1 className="monster-header">Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.searchMonsters}
          placeholder="search monsters"
        />
        <CardList monsters={this.state.filteredMonsters} />
      </div>
    );
  }
}
export default App;
