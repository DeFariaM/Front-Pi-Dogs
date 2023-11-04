import React from "react";
import Card from "../Card/Card";
import { useState } from "react";

const Cards = ({ dogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
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
          <Card key={index} dog={dog} />
        ))}
    </div>
  );
};

export default Cards;
