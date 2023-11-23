import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
const { wrapper, card_wrap, page_wrap, input_page } = style;

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
    if (isNaN(inputPage)) {
      alert("Please insert only numbers");
      setInputPage(1);
      setCurrentPage(1);
      return;
    }
    if (inputPage < 1) {
      alert("Please search a page greater than 1");
      setInputPage(1);
      setCurrentPage(1);
      return;
    }
    if (inputPage > totalPages) {
      alert(`We're sorry, but we only have ${totalPages} pages`);
      setInputPage(currentPage);
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
    <div className={wrapper}>
      <div className={card_wrap}>
        {dogs
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((dog, index) => (
            <Card key={index} dog={dog} />
          ))}
      </div>
      <div className={page_wrap}>
        <button onClick={prev}>Prev</button>
        <input
          className={input_page}
          type="text"
          value={inputPage}
          onKeyDown={handleKey}
          min={1}
          onChange={handleInput}></input>
        <button onClick={inputSearch}>Go</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Cards;
