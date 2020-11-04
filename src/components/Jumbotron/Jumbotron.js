import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron bg-dark">
      <h1 className="display-4 text-monospace">React Food Clicker</h1>
      <p className="text-monospace">
        Welcome to the game the objective is to click the images of my favorite
        foods and not click the same food more than once or you lose.
      </p>
    </div>
  );
}

export default Jumbotron;
