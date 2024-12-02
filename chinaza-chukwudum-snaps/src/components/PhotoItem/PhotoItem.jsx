import "./PhotoItem.scss";

function PhotoItem(props) {
  console.log(props.photo.photo);
  return (
    <li className="Photo">
      <img src={props.photo.photo} className="Photo__image" />
      <p className="Photo__owner">{props.photo.photographer}</p>

      <ul className="Photo__tags">
        {props.photo.tags.map((tag, index) => {
          return (
            <li className="Photo__tags-item" key={index}>
              {tag}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default PhotoItem;
