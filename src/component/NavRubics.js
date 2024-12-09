import Blue from "../mediaFiles/blue-icon.png";
import "./NavRubics.css"
import ShortHeadline from "./ShortHeadline";

const NavRubics = ({news, bizLoading}) =>{
 


  if(bizLoading){
    return <div>Loading</div>
  }

  const firstNews = news.results[0];
  const firstLetter = news.section.charAt(0).toUpperCase();

    return(
        <div className="NavRubics-container">
        <div className="category-card">
          <img src={Blue} alt="" />
          <p>{firstLetter}</p>
        </div>
        <div className="category-card-details">
          <a className="details-top" href="#">
            {news.section}
          </a>
          <a className="details-middle" href="#">
            {firstNews.title}
          </a>
          <p>
            {firstNews.abstract}
          </p>
          <a className="details-bottom" href="#">
            GO TO HEADLINE
          </a>
          <div>
            {news.results.slice(1, 11).map((item, index)=> {
              return <ShortHeadline key={index} author={item.byline} date={item.published_date} title={item.title} abstract={item.abstract} />
            })}
          
          </div>
        </div>
      </div>
    );
};

export default NavRubics;