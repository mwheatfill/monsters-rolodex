import React from "react";
import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img
            alt="monster"
            src={`https://avatars.dicebear.com/api/male/${props.monster.id}.svg?height=80&width=180`}
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email}</p>
    </div>
);
