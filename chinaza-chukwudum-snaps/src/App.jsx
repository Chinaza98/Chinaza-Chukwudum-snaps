import "./App.scss";
import PhotoList from "./components/PhotoList/PhotoList";
import Header from "./components/Header/Header";
import FilterList from "./components/FilterList/FilterList";
import Footer from "./components/Footer/footer";
import { useState } from "react";

function App() {
  const [filterStatus, setFilterStatus] = useState(true);
  const [selectedTag, setSelectedTag] = useState("");

  function handleStatusClick() {
    setFilterStatus(!filterStatus);
  }

  function handleTagClick(clickedTag) {
    setSelectedTag(clickedTag);
  }
  return (
    <>
      <Header setStatus={handleStatusClick} />
      <p className="filterlist__container">Selected Filter: {selectedTag}</p>
      <div className="container">
        {filterStatus ? (
          <FilterList
            handleTagClick={handleTagClick}
            selectedTag={selectedTag}
          />
        ) : null}
        <PhotoList selectedTag={selectedTag} />
      </div>
      <Footer />
    </>
  );
}

export default App;
