import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" value={props.id} onClick={() => props.imageClick(props.id)}>
        <img className="card-img-top" src={props.image} alt={props.id}/>
    </div>
);

export default Card;