import "./index.css";
import users from "../../mock/users";
import PostItem from "../postItem";

const PostList = ({ postData }) => {
  return (
    <div className="PostList">
      {users.map((post) => (
        <PostItem postData={post} />
      ))}
    </div>
  );
};

export default PostList;
