import "./index.css";
import { useState } from "react";

// settaggio di useState su Input come componente controllato

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const saveInput = (event) => setInputValue(event.target.value);

  // const saveUserInput = () => {
  //   setSearchValue(inputValue);
  //   console.log(inputValue);
  // };

  return (
    <div className="Input">
      <img
        className="input_picture"
        src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
        alt="profile picture"
      />
      <input
        type="text"
        placeholder="search Twitter"
        value={inputValue}
        onChange={saveInput}
      />
      {/* <button onClick={saveUserInput}></button> */}
      <img src="https://img.icons8.com/ios/512/gear.png" alt="gear icon" />
    </div>
  );
};

export default Input;
