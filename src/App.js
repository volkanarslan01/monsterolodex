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
    .then((users) =>{this.setState(() => {
      return {monster : users}
    })})
  }
  render() {
    return (
      <div className="App">
      {this.state.monster.map((monster) => {
        return (
          <div className="box">
            <h1 key={monster.id}>{monster.name}</h1>
            <h2>{monster.email}</h2>
            <h3>{monster.address.street}</h3>
          </div>
        )
      })}
      </div>
     
    )
  }
}

export default App;
