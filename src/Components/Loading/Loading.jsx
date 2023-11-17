import React from "react";
import loading from "../../assets/loading4.svg";
import style from "./Loading.module.css";
const { wrapper } = style;

const Loading = () => {
  return (
    <div className={wrapper}>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
