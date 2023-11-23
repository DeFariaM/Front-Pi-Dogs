import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";
const {
  divTemp,
  wrapper,
  dog_name,
  wrap_img,
  img_dog,
  link,
  tempSpan,
  overlay,
} = style;

const Card = ({ dog }) => {
  const temp = dog.Temperaments.slice(0, 3).join(", ").split(", ");

  return (
    <div className={wrapper}>
      <h3 className={dog_name}>{dog?.name}</h3>
      <div className={wrap_img}>
        <img src={dog.image} alt="" className={img_dog} />
      </div>
      <NavLink to={`/detail/${dog.id}`} className={link}>
        <div className={overlay}>
          <div className={divTemp}>
            {temp?.map((t, index) => {
              return (
                <p className={tempSpan} key={index}>
                  {t}
                </p>
              );
            })}
          </div>

          <h4>
            Weight Min: {dog.weight_min ? ` ${dog.weight_min} kg ` : 0} Max:{" "}
            {dog.weight_max ? ` ${dog.weight_max} kg ` : 0}
          </h4>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
