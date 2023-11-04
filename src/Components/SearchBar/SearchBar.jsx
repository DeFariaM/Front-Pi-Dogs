import React, { useState } from "react";
import { getByName } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

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
