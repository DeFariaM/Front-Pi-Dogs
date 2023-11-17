import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByOrigin,
  filterByTemperaments,
} from "../../Redux/Actions/actions";
import style from "./Filter.module.css";
const { wrapper } = style;

const Filter = ({ setCurrentPage, setInputPage }) => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

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
    <div className={wrapper}>
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
  );
};

export default Filter;
