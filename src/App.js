import React, { Component } from "react";
import "./index.css";
import Pokegame from "./Pokegame";

class App extends Component {
  render() {
    return (
      <div className="Pokecard">
        <Pokegame />
      </div>
    );
  }
}
export default App;
