import "./index.css";

const SideMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`SideMenuOn ${menuOpen ? "SideMenuOff" : ""} `}>
      <img
        className="twitter_logo_1"
        onClick={() => setMenuOpen(false)}
        src="https://img.icons8.com/stickers/512/twitter.png"
        alt="twitter logo"
      />

      <div className="all_menu">
        <div className="menu_option">
          <img
            src="https://img.icons8.com/ios/512/exterior.png"
            alt="house icon"
          />
          <h3>Home</h3>
        </div>

        <div className="menu_option">
          <img
            src="https://img.icons8.com/ios/512/compass.png"
            alt="compass icon"
          />
          <h3>Explore</h3>
        </div>

        <div className="menu_option">
          <img src="https://img.icons8.com/ios/512/bell.png" alt="bell icon" />
          <h3>Notifications</h3>
        </div>

        <div className="menu_option">
          <img
            src="https://img.icons8.com/ios/512/edit-message.png"
            alt="envelope icons"
          />
          <h3>Messages</h3>
        </div>

        <div className="menu_option">
          <img
            src="https://img.icons8.com/windows/512/bookmark-documents.png"
            alt="bookmarks icon"
          />
          <h3>Bookmarks</h3>
        </div>

        <div className="menu_option">
          <img
            src="https://img.icons8.com/ios/512/ingredients-list.png"
            alt="list icon"
          />
          <h3>Lists</h3>
        </div>

        <div className="menu_option">
          <img
            className="profile_picture"
            src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
            alt="profile picture"
          />
          <h3>Profile</h3>
        </div>

        <div className="menu_option">
          <img
            src="https://img.icons8.com/material-outlined/512/connection-status-off.png"
            alt="dots icon"
          />
          <h3>More</h3>
        </div>
      </div>

      <button>Tweet</button>
    </div>
  );
};

export default SideMenu;
