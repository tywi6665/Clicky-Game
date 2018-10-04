import React, { Component } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import characters from "./characters.json";
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  state = {
    characters,
    score: 0,
    highscore: 0
  };

<<<<<<< HEAD
  handleClick = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({ score: 0, clicked: [] });
      alert("I said not to click an image twice!!");
      this.setState({
        characters: this.state.characters.sort(function (a, b) {
          return 0.5 - Math.random();
        })
      })
    } else {
      this.state.clicked.push(id);
      console.log(this.state.clicked);
      this.setState({
        score: this.state.score + 1,
        characters: this.state.characters.sort(function (a, b) {
          return 0.5 - Math.random();
        })
      },
        () => {
          if (this.state.score === 12) {
            alert("I had my doubts, but you did it! You win!!");
            this.setState({
              characters: this.state.characters.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        });
    };

  };
=======
  // handleClick = event => {
  //   const clicked = event.target.alt;
  //   console.log(clicked);
     
  // }
>>>>>>> parent of 8742de3... push

  render() {
    console.log("birthday twins 1/14")
    return (
      <div>
        <Header />
        <Jumbotron />
        <div className="container" style={{minHeight:735}}>
          {this.state.characters.map(character => (
            <Card 
              //handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
