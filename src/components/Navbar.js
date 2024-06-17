import React from "react";
import bag from "../assests/svg/bag.svg";
import bookmark from "../assests/svg/bookmark.svg";
import furrl from "../assests/svg/furrl.svg";
import '../styles/Navbar.css';


const Navbar = () => {
  const homeBtn = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-container">
          <img
            onClick={homeBtn}
            className="logo"
            src={furrl}
            alt="Furrl"
          />
        </div>

        <div className="links">
          <a
            className="link active:bg-gray-200"
            href="https://furrl.in/wishlist"
          >
            <img src={bookmark} alt="Wishlist" />
          </a>
          <a
            className="link active:bg-gray-200"
            href="https://furrl.in/cart"
          >
            <img src={bag} alt="Cart" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
