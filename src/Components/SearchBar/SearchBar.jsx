import React, { useState } from "react";
import { getByName } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";

import style from "./SearchBar.module.css";
const { src_btn, wrapper, input_src } = style;

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
    <div className={wrapper}>
      <input
        className={input_src}
        type="search"
        value={input}
        placeholder="Search a dog breed!"
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      <button type="submit" onClick={handleClick} className={src_btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="33"
          viewBox="0 0 40 42"
          fill="none">
          <path
            d="M28.8258 30.2824L37 39L28.8258 30.2824ZM33.2222 19C33.2222 27.8366 26.4568 35 18.1111 35C9.76547 35 3 27.8366 3 19C3 10.1634 9.76547 3 18.1111 3C26.4568 3 33.2222 10.1634 33.2222 19Z"
            fill="#6284EA"
          />
          <path
            d="M28.8258 30.2824L37 39M33.2222 19C33.2222 27.8366 26.4568 35 18.1111 35C9.76547 35 3 27.8366 3 19C3 10.1634 9.76547 3 18.1111 3C26.4568 3 33.2222 10.1634 33.2222 19Z"
            stroke="#354ED2"
            stroke-opacity="0.63"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
