import React from "react";

import "./search-box.styles.css";
export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      placeholder={placeholder}
    />
  );
};
