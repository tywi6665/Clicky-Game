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

  // handleClick = event => {
  //   const clicked = event.target.alt;
  //   console.log(clicked);
     
  // }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <div className="container">
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
