import React from "react";
import "./style.css";

function ScoreNav(props) {
return <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">dsfd</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">Click an image to start <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Score:</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Top Score:</a>
    </li>
    </ul>
    </div>
    </nav>

}

export default ScoreNav;