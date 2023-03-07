import "./index.css";

const Input = () => {
  return (
    <div className="Input">
      <img
        className="input_picture"
        src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
        alt="profile picture"
      />
      <input type="text" placeholder="search Twitter" />
      <img src="https://img.icons8.com/ios/512/gear.png" alt="gear icon" />
    </div>
  );
};

export default Input;
