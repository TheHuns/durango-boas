import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="main">
          <div className="left-column">
            <h4>Navigation</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/available-summary">Available Animals</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="right-column">
            <h4>Find us on social media!</h4>
            <Link to="/">
              <img src={facebook} alt="facebook" />
              Facebook
            </Link>
            <Link to="/">
              <img src={instagram} alt="instagram" />
              Instagram
            </Link>
            <Link to="/">
              <img src={twitter} alt="twitter" />
              Twitter
            </Link>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; Copyright 2020, DurangoBoas. All Rights Reserved | Media by
            <a href="http://www.dehnhunsworth.com" target="_blank">
              dehnhunsworth.com
            </a>
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
