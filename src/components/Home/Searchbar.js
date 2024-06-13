import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/Search.css";

const Search = ({ onChange }) => {
  return (
    <div className="searchbox">
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} style={{ color: "#fff" }} />
      </div>
      <input
        placeholder="Search all events..."
        className="search-field"
        type="text"
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="sliders-icon">
        <FontAwesomeIcon icon={faSliders} style={{ color: "#ffffff" }} />
      </div>
    </div>
  );
};

export default Search;
