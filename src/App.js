import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome/Welcome"
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
