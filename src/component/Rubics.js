import Blue from "../mediaFiles/blue-icon.png";
import Orange from "../mediaFiles/orange-back.png";
import Green from "../mediaFiles/Green-back.png";
import Red from "../mediaFiles/Red-back.png";
import "./Rubics.css"
import ShortHeadline from "./ShortHeadline";

const    Rubics = ({data,business,travel, food}) => {

  
  return (
    <section>
      <div className="right-categorie-container">
        <div className="category-card">
          <img src={Blue} alt="" />
          <p>T</p>
        </div>
        <div className="category-card-details">
          <a className="details-top" href="#">
            TECHNOLOGY
          </a>
          <a className="details-middle" href="#">
            Sam Bankman-Fried Sent to Jail After Judge Revokes Bail
          </a>
          <p>
            Given that I make my living writing about Silicon Valley, I pride
            myself at not being an early adopter. I find that by avoiding the
            bleeding edge, I can refrain from wasting time on never-will-be
            technology while maintaining a connection to the real world of
            technology users. Sometimes, I am just stubborn. This explains why I
            still dont have ...
          </p>
          <a className="details-bottom" href="#">
            GO TO HEADLINE
          </a>
          {data.results.slice(0, 3).map((item, index)=> <ShortHeadline key={index} image={item.multimedia} author={item.byline} abstract={item.abstract}  title={item.title} date={item.published_date}  /> )}
          

        </div>
      </div>

      <div className="right-categorie-container">
        <div className="category-card">
          <img src={Orange} alt="" />
          <p>B</p>
        </div>
        <div className="category-card-details">
          <a className="details-top" href="#">
            BUSINESS
          </a>
          <a className="details-middle" href="#">
            Sam Bankman-Fried Sent to Jail After Judge Revokes Bail
          </a>
          <p>
            Given that I make my living writing about Silicon Valley, I pride
            myself at not being an early adopter. I find that by avoiding the
            bleeding edge, I can refrain from wasting time on never-will-be
            technology while maintaining a connection to the real world of
            technology users. Sometimes, I am just stubborn. This explains why I
            still dont have ...
          </p>
          <a className="details-bottom" href="#">
            GO TO HEADLINE
          </a>

        </div>
      </div>

      <div className="right-categorie-container">
        <div className="category-card">
          <img src={Green} alt="" />
          <p>T</p>
        </div>
        <div className="category-card-details">
          <a className="details-top" href="#">
            TRAVEL
          </a>
          <a className="details-middle" href="#">
            Sam Bankman-Fried Sent to Jail After Judge Revokes Bail
          </a>
          <p>
            Given that I make my living writing about Silicon Valley, I pride
            myself at not being an early adopter. I find that by avoiding the
            bleeding edge, I can refrain from wasting time on never-will-be
            technology while maintaining a connection to the real world of
            technology users. Sometimes, I am just stubborn. This explains why I
            still dont have ...
          </p>
          <a className="details-bottom" href="#">
            GO TO HEADLINE
          </a>

        </div>
      </div>

      <div className="right-categorie-container">
        <div className="category-card">
          <img src={Red} alt="" />
          <p>F</p>
        </div>
        <div className="category-card-details">
          <a className="details-top" href="#">
            FOOD
          </a>
          <a className="details-middle" href="#">
            Sam Bankman-Fried Sent to Jail After Judge Revokes Bail
          </a>
          <p>
            Given that I make my living writing about Silicon Valley, I pride
            myself at not being an early adopter. I find that by avoiding the
            bleeding edge, I can refrain from wasting time on never-will-be
            technology while maintaining a connection to the real world of
            technology users. Sometimes, I am just stubborn. This explains why I
            still dont have ...
          </p>
          <a className="details-bottom" href="#">
            GO TO HEADLINE
          </a>

        </div>
      </div>
    </section>
  );
};

export default Rubics;