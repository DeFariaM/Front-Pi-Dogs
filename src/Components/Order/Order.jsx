import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderByName,
  orderByWeight,
  resetFilter,
} from "../../Redux/Actions/actions";

import style from "./Order.module.css";
const { wrapper } = style;

const Order = ({ setCurrentPage, setInputPage }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderByName(e.target.value));
    setAux(!aux);
    setCurrentPage(1);
    setInputPage(1);
  };

  const handleOrderWeight = (e) => {
    dispatch(orderByWeight(e.target.value));
    setAux(!aux);
    setCurrentPage(1);
    setInputPage(1);
  };

  const reset = () => {
    dispatch(resetFilter());
    setCurrentPage(1);
    setInputPage(1);
  };

  return (
    <div className={wrapper}>
      <button onClick={reset}>Reset</button>
      <button value={"ASC"} onClick={handleOrder}>
        A - Z
      </button>
      <button value={"DESC"} onClick={handleOrder}>
        Z - A
      </button>
      <button value={"Lighter"} onClick={handleOrderWeight}>
        Lighter
      </button>
      <button value={"Heavier"} onClick={handleOrderWeight}>
        Heavier
      </button>
    </div>
  );
};

export default Order;
