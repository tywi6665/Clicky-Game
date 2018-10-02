import React, { Component } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import characters from "./characters.json";
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <div className="container">

            <Card 
              // imageClick={this.imageClick}
              id={characters.id}
              key={characters.id}
              image={characters.image}
            />
            
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
