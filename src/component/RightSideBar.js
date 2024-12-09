import Grey from "../mediaFiles/grey.jpg"
import "./RightSideBar.css"

const RightSideBar = () => {
  return (
    <div className="right-category-container">
      <div className="links-category">
        <h3>TOP categories</h3>
        <hr />
        <div>
          <ul>
            <li>
              <a href="#">TECHNOLOGY</a>
            </li>
            <li>
              <a href="#">BUSINESS</a>
            </li>
            <li>
              <a href="#">TRAVEL</a>
            </li>
            <li>
              <a href="#">FOOD</a>
            </li>
            <li>
              <a href="#">WORLD</a>
            </li>
          </ul>
        </div>
      </div>
      <h3>POPULAR INFORMATION</h3>
      <div className="brief-headline">
        <div>
          <img src={Grey} alt="" />
        </div>
        <a className="brief-top" href="#">
          TECHNOLOGY
        </a>
        <p className="brief-date">Posted March 14 2019</p>
        <a className="brief-middle" href="#">
          Which Flaour of Data <br /> Professional Are You
        </a>
        <p>
          As software engineers, developers or <br /> architects, it is pivotal
          to stay current <br />
          and relevant within the ...
        </p>
        <a className="brief-bottom" href="#">
          GO TO HEADLINE
        </a>
      </div>
      <div className="brief-headline">
        <div>
          <img src={Grey} alt="" />
        </div>
        <a className="brief-top" href="#">
          TECHNOLOGY
        </a>
        <p className="brief-date">Posted March 14 2019</p>
        <a className="brief-middle" href="#">
          Which Flaour of Data <br /> Professional Are You
        </a>
        <p>
          As software engineers, developers or <br /> architects, it is pivotal
          to stay current <br />
          and relevant within the ...
        </p>
        <a className="brief-bottom" href="#">
          GO TO HEADLINE
        </a>
      </div>
      <div className="brief-headline">
        <div>
          <img src={Grey} alt="" />
        </div>
        <a className="brief-top" href="#">
          TECHNOLOGY
        </a>
        <p className="brief-date">Posted March 14 2019</p>
        <a className="brief-middle" href="#">
          Which Flaour of Data <br /> Professional Are You
        </a>
        <p>
          As software engineers, developers or <br /> architects, it is pivotal
          to stay current <br />
          and relevant within the ...
        </p>
        <a className="brief-bottom" href="#">
          GO TO HEADLINE
        </a>
      </div>
    </div>
  );
};

export default RightSideBar;