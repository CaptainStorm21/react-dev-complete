//for class
import { Component } from 'react';
import React from 'react';
import './App.css';


//convert to class
//using classes gives a developer access to State
// state is an object. an object with properties that we can access at any point in inside of our class

//state property now exists in our class app now we can set it to smth.
//it becomes a default value

class App extends Component{
  constructor(){   
    //call the constructor method on the component class
    //it gives us to dot state.
    super();
    this.state = {
      string: "Hello, Vikings"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <a>
            Learn React
          </a>
          {/* dynamic test */}
            <h4>{ this.state.string }</h4> 
          {/* this.state does is allows to modify this.state object inside of the constructor */}
          {/* static test */}
          {/* now we have access to this method. This property called on click which takes a function 
          that gets called whever this element gets clicked on */}
          <button onClick = {() => this.setState({ string: 'Hello, React!' })}>
            Hello, Vikings
          </button>
        </header>
      </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <a>
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//export default App;


/*
State  gets updated using set state and the that change is going to re-render the component  so that we can go through
this flow again as soon as this.set.state gets called. which is when a click happens
*/

/*
when state changes the component gets rerendered. 
onClick() is a jsx attribute
JSX is trying to mimic what HTML does
so that we can create that vitual DOM and breakdown each part of the app into components
that keep getting rerendered as we update the state using set.state


*/
