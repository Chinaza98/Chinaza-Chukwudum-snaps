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
  // return <p>Photo Page</p>;

  // grab the comment,
  // get the
  // create one use useEffect to get th
  //then post comments
  // 50c6bddc-8f40-4b7a-aff1-db4ec499fc16
  // 8d01f951-8164-442e-a3c4-c6c4a571d74b

  useEffect(() => {
    async function getPhotoDetails() {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.photoPageID}?api_key=50c6bddc-8f40-4b7a-aff1-db4ec499fc1`
      );
      console.log(response.data);
      setPhoto(response.data);
    }

    getPhotoDetails();
  }, [params.photoPageID]);

  // useEffect(() => {
  async function getPhotoComments() {
    const response = await axios.get(
      `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.photoPageID}/comments?api_key=50c6bddc-8f40-4b7a-aff1-db4ec499fc1`
    );
    console.log(response.data);
    setComments(response.data);

    // for (let i = 0; i < setComment.length; i++) {
    //   console.log(i);
    //   // let comments = setComment[i];
    // }
  }

  useEffect(() => {
    getPhotoComments();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.commentName.value);
    console.log(event.target.commentDescription.value);

    const newComment = {
      name: event.target.commentName.value,
      comment: event.target.commentDescription.value,
    };
    console.log(newComment);

    try {
      async function postPhotoComments(newComment) {
        const response = await axios.post(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.photoPageID}/comments?api_key=50c6bddc-8f40-4b7a-aff1-db4ec499fc16`,
          newComment
        );

        // const response = await axios.get(
        //   `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.photoPageID}/comments?api_key=50c6bddc-8f40-4b7a-aff1-db4ec499fc1`
        // );

        setComments([response.data, ...comments]);

        // postPhotoComments();

        // console.log(response.data);
      }
      // useEffect(() => {
      //   postPhotoComments();
      // }, []);
      postPhotoComments();
    } catch (error) {
      console.error("Can't add comments");
    }

    // const newComment = {
    //   name: event.target.commentName.value,
    //   comment: event.target.commentDescription.value,
    // };
    // console.log(newComment);
    // useEffect(() => {
    //   postPhotoComments();
    // }, []);

    event.target.reset();

    // useEffect(() => {
    //   console.log(comments);
    // }, [comments]);
  }

  return (
    <>
      <Header isHome={false} />
      <SingleImage photo={photo} />
      {/* <div className="detail">
        <img src={photo.photo} className="detail__image" />
        <ul className="detail__tags">{photo.tags?.map} ((tag,index) )
        <li></li>
        </ul>
        
        <div className="detail__list">
          <p>{photo.timestamp}</p>
          <p>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z"
                fill="#0C1E1A"
              />
            </svg>
            {photo.likes} likes
          </p>
        </div>

        <p>Photo by {photo.photographer}</p>
      </div> */}

      <form onSubmit={handleSubmit} className="comments">
        <label className="comments__label">Name</label>
        <input name="commentName" type="text" className="comments__input" />
        <label className="comments__label">Comment</label>
        <textarea name="commentDescription" type="text" />
        <button className="comments__button">Submit</button>
      </form>

      <div>
        <p>Comments</p>
        <ul className="comments__list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id}>
                {comment.name} {comment.timestamp} {comment.comment}
              </li>
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