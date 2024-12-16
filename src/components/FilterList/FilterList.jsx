import "./FilterList.scss";

import axios from "axios";
import { useState, useEffect } from "react";

function FilterList(props) {
  const [filters, setfilters] = useState([]);
  // Create a state variable
  // Create a get request for the tags and set the variables to the response data.

  async function getTags() {
    const response = await axios.get("http://localhost:8000/tags/");
    console.log(response.data);
    setfilters(response.data);
  }

  useEffect(() => {
    // define async fuction here
    getTags();
  }, []);

  return (
    <section className="filterlist">
      <h3 className="filterlist__title">Filter:</h3>
      <ul className="filterlist__list">
        {filters.map((tag, index) => {
          let isSelectedTag = tag === props.selectedTag;
          return (
            <li
              onClick={() => {
                props.handleTagClick(tag);
              }}
              key={index}
              className={"filterlist__list-items"}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FilterList;
