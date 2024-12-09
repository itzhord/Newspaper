import GreyPic from "../mediaFiles/grey2.jpg";
import "./ShortHeadline.css";

const ShortHeadline = ({title, image, date, author, abstract}) => {
  return (
    <div className="">
      <div className="short-headline">
        <img src={image} alt="" />
        <div className="short-details">
          <div className="posted-text">
            <p>{date}</p>
            <p>{author}</p>
          </div>
          <a href="#">{title}</a>
          <p className="short-text">            
            {abstract}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShortHeadline;
