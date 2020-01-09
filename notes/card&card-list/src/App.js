//for class
import { Component } from "react";
import React from "react";
import { CardList } from './components/card-list/card-list.component';
import "./App.css";

class App extends Component { 
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        {/* we are passing monsters as prop  */}
        <CardList monsters = {this.state.monsters} />
          {/* {this.state.monsters.map(monster => (
          <h3 key={monster.id}> {monster.name} </h3> */}
      </div>
    );
  }
}

export default App;

