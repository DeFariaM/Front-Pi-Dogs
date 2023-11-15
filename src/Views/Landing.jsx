import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
const { link, btn_landing, landing, title, welcome, img_wrap, parent } = style;
import dog from "../assets/landing-dog.svg";

const Landing = () => {
  return (
    <div className={parent}>
      <div className={landing}>
        <div>
          <h1 className={title}>DOGKAHOLIC</h1>
          <p className={welcome}>
            Come to find the perfect dog for you, <br /> or create your own!
          </p>
          <NavLink to={"/home"} className={link}>
            <button className={btn_landing}>Start now!</button>
          </NavLink>
        </div>
        <div className={img_wrap}>
          <img src={dog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
