import React from "react";
import "./style.css";

function ScoreNav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button className="navbar-brand text-white text-monospace" href="#">
        ScoreBoard
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link text-white text-monospace" href="#">
              Score:{props.score}
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white text-monospace" href="">
              Top Score:{props.topScore}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ScoreNav;
