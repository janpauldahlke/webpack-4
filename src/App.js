import * as React from "react";
import "./App.css";


const logo = require("./frog.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>42 is still an answer</p>
        <img src={logo} className="frog"/>
      </div>
    );
  }
}

export default App;