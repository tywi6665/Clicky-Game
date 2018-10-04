import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="title">Clicky Game</li>
                    <li className="score">Score: {this.props.score}</li>
                    <li className="highscore">High Score: {this.props.highScore}</li>
                </ul>
            </nav>
        );
    };
};

export default Header;