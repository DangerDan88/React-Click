import React from "react";
import "./style.css";
function HomepageImage() {
  const url =
    "https://www.cookswithcocktails.com/wp-content/uploads/2019/05/breakfast-board-006.jpg";
  return  <img src={url} style={{ width: 250 }} alt="Breakfast Platter" />; 
}

export default HomepageImage;
