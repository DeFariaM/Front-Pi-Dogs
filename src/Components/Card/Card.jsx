import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ dog }) => {
  const temp = dog.Temperaments.slice(0, 2).join(", ");

  return (
    <div className="wrapper">
      <NavLink to={`/detail/${dog.id}`} className="link">
        <h3 className="holi">{dog?.name}</h3>
        <div className="wrap-img">
          <img src={dog.image} alt="" />
        </div>
        <p>
          Temperaments <br />
          {temp}
        </p>
        <h4>
          Height Min: {dog.weight_min} Max: {dog.weight_max}
        </h4>
      </NavLink>
    </div>
  );
};

export default Card;
