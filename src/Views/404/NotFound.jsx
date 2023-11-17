import React from "react";
import noDog from "../../assets/no-dogs.svg";
import style from "./NotFound.module.css";
const { vh, msg, wrap_all, img, wrap_img } = style;

const NotFound = ({ message }) => {
  return (
    <div className={wrap_all}>
      <div className={wrap_img}>
        <img className={img} src={noDog} alt="" />
      </div>
      <div
        className={
          msg
        }>{`We're sorry, but this ${message} doesn't exists yet`}</div>
    </div>
  );
};

export default NotFound;
