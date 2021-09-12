import "./Navbar.scss";
import Search from "@material-ui/icons/Search";
import { ArrowDropDown, Notifications } from "@material-ui/icons";
import { useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
            alt=""
          />

          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>settings</span>
              <span>logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
