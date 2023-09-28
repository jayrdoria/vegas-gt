import React from "react";
import "../css/style.css";

const Footer = () => {
  return (
    <div className="row">
      <div className="mt-3"></div>
      <footer id="footer">
        <ul>
          <li>
            <a href="#top-casino">TOP CASINO</a>
          </li>
          <li>
            <a href="#user-reviews">USER REVIEWS</a>
          </li>
          <li>
            <a href="#game-provider">FEATURED GAME PROVIDERS</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div className="text-center copyright mt-4">© 2023 VegasGT</div>
      </footer>
    </div>
  );
};

export default Footer;
