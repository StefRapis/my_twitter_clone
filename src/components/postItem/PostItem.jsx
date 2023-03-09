import "./index.css";
import { useState, useEffect } from "react";

const PostItem = ({ postData }) => {
  // destructuring dell'oggetto che arriva dalla fetch per "posts" in PostList
  const { title, body, tags, userId } = postData;

  // useState per memorizzare solo dati dell'utente della seconda fetch
  const [userData, setUserData] = useState({});

  // altra fetch per raccogliere solo l'user Id (che viene preso dai dati della prima fetch) in modo da avere ulteriori dati da includere nel componente
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  // funzione count del cuoricino
  const [heartFill, setHeartFill] = useState(false);
  // funzione count del cuoricino
  const [heartCount, setHeartCount] = useState(0);

  const fillHeart = () => {
    setHeartFill((prev) => !prev);
  };

  // const countHeart = () => {
  //   setHeartCount((prev) => prev + 1);
  // };

  return (
    <div className="PostItem">
      <img
        className="profile_picture"
        src={userData.image}
        alt="profile picture"
      />

      <div className="post_info">
        <div className="post_content">
          <div className="post_name">
            <span className="span_name">{userData.firstName}</span>
            <span className="span_email">{tags.join(" - ")}</span>
          </div>

          <p>{body}</p>
        </div>

        <div className="post_icons">
          <img
            src="https://img.icons8.com/ios/512/speech-bubble.png"
            alt="comments"
          />
          <img
            src="https://img.icons8.com/material-outlined/512/retweet.png"
            alt="retweet"
          />
          <img
            onClick={fillHeart}
            src={
              heartFill
                ? "https://img.icons8.com/offices/512/hearts.png"
                : "https://img.icons8.com/ios-glyphs/512/hearts.png"
            }
            alt="heart"
          />
          {/* <p>{heartCount}</p> */}
          <img
            src="https://img.icons8.com/ios/512/send-letter.png"
            alt="upload"
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
