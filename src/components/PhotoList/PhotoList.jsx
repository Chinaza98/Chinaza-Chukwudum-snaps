import "./PhotoList.scss";

import PhotoItem from "../PhotoItem/PhotoItem";
import { useState, useEffect } from "react";

import axios from "axios";

function PhotoList(props) {
  const [photos, setPhotos] = useState([]);
  console.log("photolist props:", props);

  useEffect(() => {
    async function getPhotos() {
      const response = await axios.get("http://localhost:8000/photos/");

      console.log(response.data);
      setPhotos(response.data);
    }
    getPhotos();
  }, []);

  let filteredPhotos = [];
  console.log(props.PhotoItemselectedTag !== "");

  if (props.selectedTag == "") {
    filteredPhotos = photos;
  } else {
    filteredPhotos = photos.filter((photo) => {
      console.log(photo.tags);
      return photo.tags.includes(props.selectedTag);
    });
  }

  return (
    <section className="photos">
      <p className="photos__title">Our mission:</p>
      <p className="photos__title-body">
        Provide Photographers a space to share photos of the neighbourhoods they
        cherish, <i>expressed in their unique style</i>
      </p>
      <ul className="photos__list">
        {filteredPhotos.map((photo) => {
          return <PhotoItem key={photo.id} photo={photo} />;
        })}
      </ul>
    </section>
  );
}

export default PhotoList;
