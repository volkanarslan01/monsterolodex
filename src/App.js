import './App.css';
import React ,{Component} from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
    monster : [
    {name: 'Linda',id : `152a`},
    {name: 'Frank', id : `153a`}
    ]
    }
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
