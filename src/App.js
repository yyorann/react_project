import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Yihua", lastName: "Zhang" },
      company: "ZTM",
    };
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => ({ name: { firstName: "Yihua", lastName: "Zhang" } }),
                () => console.log(this.state)
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

return (
  <div class="App">
    <header class="App-header">
      <img src={logo} class="App-logo" alt="logo" />
      <p>
        Hi {this.state.name.firstName} {this.state.name.lastName}, I work at
        {this.state.company}
      </p>
      <button onClick="updateText()"> Change Name</button>
    </header>
  </div>
);

function updateText() {
  document.getElementsByTagName('button')[0].textContent = 
}
