import React, { Component } from 'react';
import Jumbotron from "./components/jumbotron";
import Tile from "./components/tile";
// Game code goes in App

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Tile />
      </div>
    );
  }
}

export default App;
