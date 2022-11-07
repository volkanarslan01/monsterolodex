import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [], 
      searchField : ``
      // İnitial State
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monster: users };
        });
      });
  }
  render() {
    console.log(`render`);

    const _filMonster = this.state.monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search Monster"
          onChange={(event) => {
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {return {searchField}});
          }}
        />

        {
          _filMonster.map((monster) => {
            return (
              <div  className="box" key={monster.id}>
              <h1>Name</h1>
              <h1>{monster.name}</h1>
              <h2>Username</h2>
              <h2>{monster.username}</h2>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
