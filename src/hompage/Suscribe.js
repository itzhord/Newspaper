import At from "../mediaFiles/at.png";
import Sub from "../mediaFiles/subscribe-clip.png";
import SubBtn from "../mediaFiles/send-icon.png";
import "./Suscribe.css";

const Subscribe = () => {
  return (
    <div className="sub-gen">
      <div className="sub-container">
        <div className="sub-image">
          <img className="sub-bg" src={Sub} alt="purple background" />
          <img className="sub-at" src={At} alt="@ symbol" />
        </div>
        <div className="sub-details">
          <h3>
            <strong>
              Subscribe to INFORMAT <br /> Email Briefings
            </strong>
          </h3>
          <p>
            Sign up for our daily newsletter and get the best of the INFORMAT in{" "}
            <br /> your in-box
          </p>

          <input
            type="text"
            className="subscribe-area"
            placeholder="Your email"
          />

          <div className="sub-btn">
            <a href="https://www.example.com">
              <img
                src={SubBtn}
                alt="Description of the image"
              /> SUBSCRIBE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
