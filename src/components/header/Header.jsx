import "./index.css";
import { useState } from "react";
import SideMenu from "../sideMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const hamburgerTrigger = () => {
    setMenuOpen(!menuOpen); // il ! mi setta un toggle: la variabile passa continuamente da true a false
    console.log(menuOpen);
  };

  return (
    <div className="Header">
      <div className="burger_menu" onClick={hamburgerTrigger}>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
      </div>
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <img
        className="twitter_logo"
        src="https://img.icons8.com/stickers/512/twitter.png"
        alt="twitter logo"
      />
      <img
        className="sparkles_icon"
        src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/512/external-firework-sparkles-with-light-and-explosion-sound-new-fresh-tal-revivo.png"
        alt="sparkles image"
      />
    </div>
  );
};

export default Header;
