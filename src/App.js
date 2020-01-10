//for class
import { Component } from "react";
import React from "react";
import { CardList } from './components/card-list/card-list.component';
import "./App.css";

class App extends Component { 
  constructor() {
    super();

    this.state = {
      monsters: [],
      //adding logic for search input 
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    // filtering the search input
    // destructuring allows is pull properies off of an bject 
    const { monsters, searchField } = this.state;
    //same as 
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
       
        <input type="search" placeholder="Find your monster" onChange = { e => this.setState ({ searchField: e.target.value })}
        />


        {/* <CardList monsters = {this.state.monsters} /> */}
        <CardList monsters = { filteredMonsters } />
      </div>
    );
  }
}

export default App;

