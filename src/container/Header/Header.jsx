import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1"> The Key to find Dining</h1>
      <p className="p__opensans " style={{ margin: "2rem 0" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        voluptate inventore earum, omnis amet labore accusamus voluptates
        aperiam nam cum?
      </p>
      <button type="button" className="custom__button">
        {" "}
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt=" welcome img" />
    </div>
  </div>
);

export default Header;
