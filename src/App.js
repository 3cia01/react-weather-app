import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was coded by Patricia Monye and is {""}
          <a
            href="https://github.com/3cia01/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
