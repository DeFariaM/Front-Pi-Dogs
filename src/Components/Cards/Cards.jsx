import React from "react";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const Cards = ({ dogs, currentPage, setCurrentPage }) => {
  const itemsPerPage = 8;

  const prev = () => {
    const prevPage = currentPage - 1;
    if (prevPage <= 0) return;
    setCurrentPage(prevPage);
  };

  const next = () => {
    const total = dogs.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPerPage;
    if (firstIndex >= total) return;

    setCurrentPage(nextPage);
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>

      {dogs
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((dog, index) => (
          <NavLink key={index} to={`/detail/${dog.id}`}>
            <Card key={index} dog={dog} />
          </NavLink>
        ))}
    </div>
  );
};

export default Cards;
