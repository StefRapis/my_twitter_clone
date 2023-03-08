import "./index.css";
// import users from "../../mock/users";
import PostItem from "../postItem";

// 1. importo useState e useEffet per poterli utilizzare sul componente
import { useState, useEffect } from "react";

const PostList = () => {
  // 2. variabile per salvare valore di array che arriva dalla fetch, le parentesi sono vuote in attesa di essere riempite
  const [post, setPost] = useState([]);

  // 3. faccio fetch dei post con useEffect e memorizzo i dati che arrivano alla var "post" tramite setPost
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.posts));
  }, []);

  // 4. faccio map della var "post" (che adesso ha in se i dati della fetch), e per ogni oggetto monto componente "postItem"
  return (
    <div className="PostList">
      {post.map((item) => (
        <PostItem postData={item} />
      ))}
    </div>
  );
};

export default PostList;
