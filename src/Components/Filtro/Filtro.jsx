/* import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  orderByName,
  orderByWeight,
  filterByOrigin,
  filterByTemperaments,
} from "../../Redux/Actions/actions";
const Filtro = ({ setCurrentPage, setInputPage }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const temperaments = useSelector((state) => state.temperaments);

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

  const handleFilterTemp = (e) => {
    e.preventDefault();
    dispatch(filterByTemperaments(e.target.value));
    setCurrentPage(1);
    setInputPage(1);
  };

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
    setCurrentPage(1);
    setInputPage(1);
  };

  return (
    <div>
      <div>
        <select
          name="temperaments"
          id="temps"
          defaultValue={"placeholder"}
          onChange={handleFilterTemp}>
          <option name={"placeholder"} hidden>
            Temperaments
          </option>
          <option value="All">All</option>
          {temperaments?.map((t) => {
            return (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            );
          })}
        </select>

        <select defaultValue={"placeholder"} onChange={handleFilterOrigin}>
          <option name={"placeholder"} hidden>
            Origin
          </option>
          <option value="DB">Created</option>
          <option value="API">Existent</option>
          <option value="ALL">All</option>
        </select>
      </div>
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

export default Filtro; */
