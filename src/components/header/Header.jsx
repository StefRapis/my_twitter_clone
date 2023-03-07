import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="burger_menu">
        <div className="burger_line"></div>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
      </div>
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
