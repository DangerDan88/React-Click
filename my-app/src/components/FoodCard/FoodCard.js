import React from "react";
import "./style.css";

function FoodCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.redisplayFood(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FoodCard;
