import "./FilterList.scss";
import tagData from "../../data/tags.json";

function FilterList(props) {
  return (
    <section className="filterlist">
      <h3 className="filterlist__title">Filter:</h3>
      <ul className="filterlist__list">
        {tagData.map((tag, index) => {
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
