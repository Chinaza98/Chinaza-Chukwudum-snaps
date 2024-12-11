import "./PhotoList.scss";

import PhotoItem from "../PhotoItem/PhotoItem";
import { useState, useEffect } from "react";

import axios from "axios";

function PhotoList(props) {
  const [photos, setPhotos] = useState([]);
  console.log("photolist props:", props);
  //  Get photos from API and set state photos to whatever is returned.

  useEffect(() => {
    async function getPhotos() {
      const response = await axios.get(
        "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=50c6bddc-8f40-4b7a-aff1-db4ec499fc16"
      );

      console.log(response.data);
      setPhotos(response.data);
    }
    getPhotos();
  }, []);

  // useEffect(() => {
  //   getPhotos();
  // }, []);

  let filteredPhotos = [];
  console.log(props.PhotoItemselectedTag !== "");

  if (props.selectedTag == "") {
    filteredPhotos = photos;
  } else {
    filteredPhotos = photos.filter((photo) => {
      console.log(photo.tags);
      return photo.tags.includes(props.selectedTag);
    });
    // filteredPhotos = photos;
  }
  //  If selectedTag = ""
  // show all photos
  // else
  // show the filtered photos
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

// filteredPhotos = photos.filter((photo)
// => {
//   return photo.tags.includes(props.selectedTag);
// });
