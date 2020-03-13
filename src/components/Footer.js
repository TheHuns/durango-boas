import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import Facebook from "../img/Facebook.js";
import Instagram from "../img/Instagram.js";
import Twitter from "../img/Twitter.js";
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
                <Link to="/collection-container">Collection</Link>
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
            <div className="media-links-container">
              <Link to="/">
                <svg height="24" width="24">
                  <Facebook />
                </svg>
                Facebook
              </Link>
              <Link to="/">
                <svg height="24" width="24">
                  <Instagram />
                </svg>
                Instagram
              </Link>
              <Link to="/">
                <svg height="24" width="24">
                  <Twitter />
                </svg>
                Twitter
              </Link>
            </div>
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
