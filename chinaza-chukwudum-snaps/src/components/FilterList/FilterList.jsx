import "./FilterList.scss";
import tagData from "../../data/tags.json";

function FilterList(props) {
  //   const [tags, setTags] = useState[tagsData];
  //   console.log("FilterList props:", props);
  //   console.log(props);
  return (
    <section className="Filterlist">
      <h3>Filter:</h3>
      <ul className="Filterlist__list">
        {tagData.map((tag, index) => {
          let isSelectedTag = tag === props.selectedTag;
          return (
            <li
              onClick={() => {
                props.handleTagClick(tag);
              }}
              key={index}
              className={"Filterlist__list-items"}
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
