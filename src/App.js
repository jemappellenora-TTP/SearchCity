import React, { Component } from "react";
import FetchCity from "./component/FetchCity";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searching: true,
    };
  }
  render() {
    return (
      <div className="City">
        <FetchCity />
      </div>
    );
  }
}