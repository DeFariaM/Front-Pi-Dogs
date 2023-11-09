import React, { useState } from "react";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const Cards = ({
  dogs,
  currentPage,
  setCurrentPage,
  inputPage,
  setInputPage,
}) => {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(dogs.length / itemsPerPage);

  const handleInput = (e) => {
    setInputPage(e.target.value);
  };

  const inputSearch = () => {
    if (inputPage > totalPages) {
      alert(`We're sorry, but we only have ${totalPages} pages`);
      setInputPage(1);
      setCurrentPage(1);
      return;
    }
    setCurrentPage(inputPage);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") inputSearch();
  };

  const prev = () => {
    const prevPage = currentPage - 1;
    if (prevPage <= 0) return;
    setCurrentPage(prevPage);
    setInputPage(prevPage);
  };

  const next = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      alert(`We're sorry, but we only have ${totalPages} pages`);
      return;
    }
    setCurrentPage(nextPage);
    setInputPage(nextPage);
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <input
        type="search"
        value={inputPage}
        onKeyDown={handleKey}
        placeholder={currentPage}
        onChange={handleInput}></input>
      <button onClick={inputSearch}>Go</button>
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
