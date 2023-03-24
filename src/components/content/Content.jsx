import "./index.css";
import { useRef } from "react";

import Header from "../header";
import PostList from "../postList";

const Content = ({ setModalOpen }) => {
  // const contentRef = useRef(null);

  return (
    <div
      // ref={contentRef}
      className="Content"
      // onScroll={() =>
      //   contentRef.current.scrollTop >= 1
      //     ? (contentRef.current.style.backgroundColor = "red")
      //     : (contentRef.current.style.backgroundColor = "white")
      // }
    >
      <Header />
      <PostList setModalOpen={setModalOpen} />
    </div>
  );
};

export default Content;
