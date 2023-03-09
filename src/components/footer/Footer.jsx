import "./index.css";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  const showDivInfo = () => {
    console.log(footerRef);
  };

  return (
    <div className="Footer" ref={footerRef}>
      <button className="footer_btn" onClick={showDivInfo}>
        lights Off
      </button>
      <img src="https://img.icons8.com/ios/512/exterior.png" alt="house icon" />

      <img
        src="https://img.icons8.com/ios/512/compass.png"
        alt="compass icon"
      />

      <img src="https://img.icons8.com/ios/512/bell.png" alt="bell icon" />

      <img
        src="https://img.icons8.com/ios/512/edit-message.png"
        alt="envelope icons"
      />
    </div>
  );
};

export default Footer;
