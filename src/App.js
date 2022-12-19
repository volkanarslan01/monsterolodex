import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// ? function components

// ? render kelime olarak yazilmaz ama kullanilir.
const App = ({}) => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  console.log(typeof searchField);
  const onSearchChange = (event) => {
    const searchFieldS = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldS);
  };
  return (
    <>
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        {/* <CardList monsters={filteredMonsters} /> */}
      </div>
    </>
  );
};

export default App;

/* 
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;








*/
