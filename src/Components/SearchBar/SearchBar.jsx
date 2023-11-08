import React, { useState } from "react";
import { getByName } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({ setCurrentPage }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    input.length !== 0
      ? dispatch(getByName(input))
      : window.alert("Please search something valid!");
  };

  return (
    <div>
      <input
        type="search"
        value={input}
        placeholder="Please write a breed!"
        onChange={handleChange}
      />
      <button type="submit" onClick={(e) => handleClick(e)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
