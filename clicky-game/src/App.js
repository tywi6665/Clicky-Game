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
        
        <Footer />
      </div>
    );
  }
}

export default App;
