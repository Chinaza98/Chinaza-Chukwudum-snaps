import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import SingleImage from "../../components/SingleImage/SingleImage";
import "./PhotoPage.scss";
import axios from "axios";

function PhotoPage() {
  const [photo, setPhoto] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  console.log(params.photoPageID);

  useEffect(() => {
    async function getPhotoDetails() {
      const response = await axios.get(
        `http://localhost:8000/photos/${params.photoPageID}`
      );
      console.log(response.data);
      setPhoto(response.data);
    }

    getPhotoDetails();
  }, [params.photoPageID]);

  useEffect(() => {
    async function getPhotoComments() {
      const response = await axios.get(
        `http://localhost:8000/photos/${params.photoPageID}/comments`
      );
      console.log(response.data);
      setComments(response.data);
    }

    getPhotoComments();
  }, [params.photoPageID]);

  async function postPhotoComments(newComment) {
    try {
      const response = await axios.post(
        `http://localhost:8000/photos/${params.photoPageID}/comments`,
        newComment
      );

      setComments([response.data, ...comments]);
    } catch (error) {
      console.error("Can't add comments");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.commentName.value);
    console.log(event.target.commentDescription.value);

    const newComment = {
      name: event.target.commentName.value,
      comment: event.target.commentDescription.value,
    };
    console.log(newComment);

    postPhotoComments(newComment);

    event.target.reset();
  }

  return (
    <>
      <Header isHome={false} />
      <SingleImage photo={photo} />

      <form onSubmit={handleSubmit} className="comments">
        <label className="comments__label">Name</label>
        <input name="commentName" type="text" className="comments__input" />
        <label className="comments__label">Comment</label>
        <textarea name="commentDescription" type="text" />
        <button className="comments__button">Submit</button>
      </form>

      <div className="comments__section">
        <p className="comments__heading">Comments</p>
        <ul className="comments__list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div className="comments__list-item">
                <li key={comment.id} className="comments__list-row">
                  <p className="comments__list-name">{comment.name}</p>
                  <p className="comments__list-date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </li>
                <p className="comments__list-description">{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No Comments</p>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default PhotoPage;
