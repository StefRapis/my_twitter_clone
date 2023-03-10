import "./index.css";
import Header from "../header";
import PostList from "../postList";

const Content = ({ setModalOpen }) => {
  return (
    <div className="Content">
      <Header />
      <PostList setModalOpen={setModalOpen} />
    </div>
  );
};

export default Content;
