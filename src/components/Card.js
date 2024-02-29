import React from "react";
import pizza from "../assets/pizza.jpg";

function Card() {
  return (
    <div className="card">
      <img src={pizza} alt=""></img>
      <div className="card-body">
        <h4 className="card-title">pizza</h4>
        <p className="card-text text-secondary">
          deleciosa pizza de peperoni orneada en horno de piedra a 400C
        </p>
        <a href="#" class="btn btn-primary">Ordenar</a>
      </div>
    </div>
  );
}

export default Card;
