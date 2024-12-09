import { Link } from "react-router-dom";
import menu from "../mediaFiles/menu.png";
import search from "../mediaFiles/Search.png";
import insta from "../mediaFiles/Insta.png";
import Twitter from "../mediaFiles/Twitter.png";
import Facebook from "../mediaFiles/Facebook.png";
import Youtube from "../mediaFiles/Youtube.png";
import "./TopMenu.css"

const TopMenu = () => {
  return (
    <div className="top-container">
      <h1>INFORMAT</h1>
      <div className="icon-nav">
        <div className="first-nav-icon">
          <ul>
            <li>
              <img src={menu} />
            </li>
            <li>
              <img src={search} />
            </li>
          </ul>
        </div>
        <p>WELCOME TO INFORMAT, WHERE THOUGHTS MATTER</p>
        <div className="second-nav-icon">
          <ul>
            <li>
              <img src={insta} />
            </li>
            <li>
              <img src={Twitter} />
            </li>
            <li>
              <img src={Facebook} />
            </li>
            <li>
              <img src={Youtube} />
            </li>
          </ul>
        </div>
      </div>
      <div className="categories-nav">
        <ul className="list">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/technology">TECHNOLOGY</Link></li>
          <li><Link to="/science">SCIENCE</Link></li>
          <li><Link to="/business">BUSINESS</Link></li>
          <li><Link to="/travel">TRAVEL</Link></li>
          <li><Link to="/food">FOOD</Link></li>
          <li><Link to="/health">HEALTH</Link></li>
          <li><Link to="/sports">SPORTS</Link></li>
          <li><Link to="/fashion">FASHION</Link></li>
          <li><Link to="/world">WORLD</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
