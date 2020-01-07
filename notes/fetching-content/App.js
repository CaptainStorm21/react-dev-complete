//for class
import { Component } from "react";
import React from "react";
import "./App.css";

class App extends Component { 
  constructor() {
    super();

    this.state = {
      monsters: [
        //an empty array 
        //We're just going to we're going to wait for our component to mount and then we're going to fetch all
        //of our users and then we're going to update our state's monster property with this new array of users.
        // {
        //   name: "Drakula",
        //   id: "1"
        // },
        // {
        //   name: "Frankenstein",
        //   id: "2"
        // },
        // {
        //   name: "Zombie",
        //   id: "3"
        // }
      ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(response))
    .then(response => response.json())
    //     // outputs an array in console log
    // .then(users => console.log(users))
    //now we want to set our monsters to this array of these users right and we want our initial state
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h3 key={monster.id}> {monster.name} </h3>
        ))}
      </div>
    );
  }
}

export default App;


/*
Essentially methods that get called at different stages of when this component gets rendered.

ComponentDidMount = the component counts. It renders into the DOM for the first time it does 



*/

/* to recap
So now just to go over this again we're using this component did mount lifecycle method that we have

access to because of our class component and we are fetching from this you are all we are taking a response

and converting it into the JSON format that are JavaScript can understand and use and then we're going

to take the users that we got back from it and set our monsters to that array of user and that's how

we end up with this list of in the next section we're going to now convert this to look a little bit

closer to this.
*/
