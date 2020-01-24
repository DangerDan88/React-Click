import React, { Component } from "react";
//import HomepageImage from "./components/HomepageImage";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import GameContainer from "./components/GameContainer/GameContainer.js";
import FoodCard from "./components/FoodCard/FoodCard.js";
import ScoreNav from "./components/ScoreNav/Score.js";
import food from "./food.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    topScore: 0,
    food,
    clickedCard: [],
    score: 0
  };

  redisplayFood = id => {
    console.log(id);
    console.log(this.state.clickedCard);
    if (this.state.clickedCard.includes(id)) {
      if (this.state.topScore < this.state.score) {
        this.setState({
          topScore: this.state.score,
          score: 0,
          food: this.shuffle(food),
          clickedCard: []
        });
      } else {
        this.setState({
          score: 0,
          food: this.shuffle(food),
          clickedCard: []
        });
      }
    } else {
      const clickedCard = [...this.state.clickedCard];
      clickedCard.push(id);
      this.setState({
        food: this.shuffle(food),
        clickedCard: clickedCard,
        score: this.state.score + 1
      });
    }
  };
  // else if loss res set state back to original
  shuffle = arra1 => {
    var ctr = arra1.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };
  componentDidUpdate() {
    //console.log(this.state.topScore);
    //console.log(this.state.score);
    //console.log(this.state.clickedCard);
  }

  // Map over this.state.food and render a FoodCard component for each food object
  render() {
    return (
      <div>
        <ScoreNav score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <GameContainer>
          {this.state.food.map(food => (
            <FoodCard
              redisplayFood={this.redisplayFood}
              id={food.id}
              key={food.id}
              name={food.name}
              image={food.image}
            />
          ))}
        </GameContainer>
      </div>
    );
  }
}

export default App;
