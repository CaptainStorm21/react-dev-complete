import { Component } from "react";
import React from "react";
import './search-box.styles.css';


//functional components unlike 
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className="search-box" 
           type="search" 
           placeholder={placeholder}
        //    onChange = { e => this.setState ({ searchField: e.target.value })}
        onChange = { handleChange }
    />
)