import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../Redux/Actions/actions";
import Cards from "../Components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state?.allDogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <Cards dogs={allDogs} />
    </div>
  );
};
/* {countries
  .slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  )
  .map((country) => (
    <Card
      key={country.ID}
      id={country.ID}
      name={country.name}
      flags={country.flags}
      continent={country.continent}
    />
  ))}
 */

export default Home;
