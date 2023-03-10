import "./index.css";
import { useState } from "react";

const Modal = ({ setModalOpen }) => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [idInput, setIdInput] = useState("");

  // funzioni per settare valore delle input con quello inserito dall'utente
  const getTitleData = (event) => {
    setTitleInput(event.target.value);
  };
  const getBodyData = (event) => {
    setBodyInput(event.target.value);
  };
  const getIdData = (event) => {
    setIdInput(event.target.value);
  };

  // funzione per effettuare fetch post al click del pulsante nella form
  const submitPost = (event) => {
    event.preventDefault();
    fetch("https://dummyjson.com/posts/4", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput,
      }),
    });
    setModalOpen(false);
    alert("Your tweet has been edited!");
  };

  return (
    <div className="Modal">
      <h2>Edit a Tweet</h2>
      <form onSubmit={submitPost} className="modal_form">
        <input
          value={idInput}
          onChange={getIdData}
          type="number"
          name="id"
          id="id"
          placeholder="Insert Id"
          min="1"
          max="30"
          required
        />

        <input
          value={titleInput}
          onChange={getTitleData}
          type="text"
          name="title"
          id="title"
          placeholder="Insert Title"
          required
        />
        <input
          value={bodyInput}
          onChange={getBodyData}
          className="modal_body"
          type="text"
          name="message"
          id="message"
          placeholder="Insert your message"
          required
        />
        <input className="modal_btn" type="submit" value="Edit your tweet" />
      </form>
    </div>
  );
};

export default Modal;
