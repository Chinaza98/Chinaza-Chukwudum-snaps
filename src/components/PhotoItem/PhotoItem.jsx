import "./PhotoItem.scss";
import { Link } from "react-router-dom";

function PhotoItem({ photo }) {
  console.log(photo.photo);
  return (
    <Link to={`/details/${photo.id}`}>
      <li className="Photo">
        <img src={photo.photo} className="Photo__image" />
        <p className="Photo__owner">{photo.photographer}</p>

        <ul className="Photo__tags">
          {photo.tags.map((tag, index) => {
            return (
              <li className="Photo__tags-item" key={index}>
                {tag}
              </li>
            );
          })}
        </ul>
      </li>
    </Link>
  );
}

export default PhotoItem;
