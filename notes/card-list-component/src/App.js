//for class
import { Component } from "react";
import React from "react";
import { CardList } from './components/card-list/card-list.component';
import "./App.css";

class App extends Component { 
  constructor() {
    super();

    this.state = {
      monsters: [
        //an empty array 
        //We're just going to we're going to wait for our component to mount and then we're going to fetch all
        //of our users and then we're going to update our state's monster property with this new array of users.
      ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //now we want to set our monsters to this array of these users right and we want our initial state
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList name="Dsiney">
          {/* children */}
           {/* <b> Children of Disney</b> */}
          {this.state.monsters.map(monster => (
          <h3 key={monster.id}> {monster.name} </h3>
        ))}
        </CardList>
      </div>
    );
  }
}

export default App;

/*
But one of the main properties that exists on this props object is one called children it will always
be there but it if there's no children it'll be null.
So what are children children are actually what you pass in between the brackets of our component that
gets called.
So if in here I say e are then the children prop will be this Tuesday.
*/