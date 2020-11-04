import React from "react";
import "./style.css";

function ScoreNav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white text-monospace" href="#">
        ScoreBoard
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white text-monospace" href="#">
              Score:{props.score}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white text-monospace" href="#">
              Top Score:{props.topScore}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ScoreNav;
