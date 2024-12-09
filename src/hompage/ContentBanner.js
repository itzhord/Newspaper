import Banner from "../mediaFiles/Banner.png";
import SearchInput from "../mediaFiles/white.png"
import "./ContentBanner.css";

const ContentBanner = () => {
  return (
    <div className="Banner-con">
      <img src={Banner} alt="News Banner" />
      <div className="input-field">
        <input type="text" className="input-area" placeholder="Search" />
        <img  className="image-input" src={SearchInput} alt="input" />
      </div>
    </div>
  );
};

export default ContentBanner;
