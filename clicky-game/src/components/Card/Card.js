import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" style="width: 18rem;" onCLick={props.imageClick}>
        <img className="card-img-top" src={require("../../images" + props.image)} alt={props.image.replace(".jpg", "")}/>
    </div>
);

export default Card;