import React, { useState } from "react";
import { getByName } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({ setCurrentPage }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleClick(e);
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
          window.alert(payload.error);
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
        onKeyDown={handleKey}
      />
      <button type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
