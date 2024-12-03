import "./PhotoList.scss";
import photosData from "../../data/photos.json";
import PhotoItem from "../PhotoItem/PhotoItem";
import { useState } from "react";

function PhotoList(props) {
  const [photos, setPhotos] = useState(photosData);
  console.log("photolist props:", props);

  let filteredPhotos = [];

  if (props.selectedTag !== "") {
    filteredPhotos = photos.filter((photo) => {
      return photo.tags.includes(props.selectedTag);
    });
  } else {
    filteredPhotos = photos;
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
