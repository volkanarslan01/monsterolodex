import './App.css';
import React ,{Component} from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
    monster : [] // İnitial State
    }
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) => {console.log(users)})
  }
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
     
    )
  }
}

export default App;
