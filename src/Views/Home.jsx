import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearOrders,
  filterByOrigin,
  filterByTemperaments,
  getDogs,
  getTemperaments,
  orderByName,
  orderByWeight,
} from "../Redux/Actions/actions";
import Cards from "../Components/Cards/Cards";

const Home = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state?.allDogs);
  const temperaments = useSelector((state) => state.temperaments);
  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    return () => dispatch(clearOrders());
  }, [dispatch]);

  const handleOrder = (e) => {
    dispatch(orderByName(e.target.value));
    setAux(!aux);
    setCurrentPage(1);
  };
  const handleOrderWeight = (e) => {
    dispatch(orderByWeight(e.target.value));
    setAux(!aux);
    setCurrentPage(1);
  };

  const handleFilterTemp = (e) => {
    e.preventDefault();
    dispatch(filterByTemperaments(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
    setCurrentPage(1);
  };
  const reset = () => {
    dispatch(getDogs());
    setCurrentPage(1);
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
      <button onClick={reset}>reset</button>
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

      <Cards
        dogs={allDogs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
