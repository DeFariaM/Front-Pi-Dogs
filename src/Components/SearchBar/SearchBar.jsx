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

    if (/\d/.test(input)) {
      window.alert("You only can use letters");
      setInput("");
    } else if (!input.length) {
      window.alert("Please search something valid");
    } else if (input.length !== 0) {
      dispatch(getByName(input)).then(({ payload }) => {
        if (!payload.length) {
          window.alert("That dog breed doesn't exists");
          setInput("");
        }
      });
    }
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
