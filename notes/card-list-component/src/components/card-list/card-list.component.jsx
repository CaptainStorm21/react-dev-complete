import { Component } from "react";
import React from "react";
import './card-list.styles.css';

export const CardList = props => {
    // console.log(props);
    return <div className='card-list'>{props.children} </div>
}

/*
export const CardList = (PROP) => <div>
Now one of the big things about components is that they take in something called Props and props is
going to be the parameter that we get from our functional component.
*/

/*
import card-list component into App.js
so the application can see/render card-list component 
see App.js file
*/

/*place   <CardList /> inside of the App.js under <div className="App"> tag */

