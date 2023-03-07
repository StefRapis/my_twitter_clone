import "./index.css";

const PostItem = ({ postData }) => {
  const { photo, userName, body, email } = postData;

  return (
    <div className="PostItem">
      <img className="profile_picture" src={photo} alt="profile picture" />

      <div className="post_info">
        <div className="post_content">
          <div className="post_name">
            <span className="span_name">{userName}</span>
            <span className="span_email">{email}</span>
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
            src="https://img.icons8.com/ios-glyphs/512/hearts.png"
            alt="heart"
          />
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
