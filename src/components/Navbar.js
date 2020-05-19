import React from "react";
import { Link } from "gatsby";
import Logo from "../img/Logo_small.png";

const Navbar = class extends React.Component {
  state = {
    active: false,
    navBarActiveClass: "",
  };

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    const { navbarBackground, currentPage } = this.props;

    return (
      <>
        <nav
          className={`${this.state.navBarActiveClass}`}
          id="nav"
          style={{
            backgroundColor: "#222",
          }}
        >
          <div className="nav-container">
            <div className="brand">
              <Link to="/">
                <img src={Logo} alt="small text logo" />
              </Link>
            </div>
            {currentPage && (
              <div className="current-page">
                <h4>Current Page</h4>
                <p>{currentPage}</p>
              </div>
            )}
            <ul className="links">
              <li>
                <Link to="/" activeClassName="active-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/available-summary" activeClassName="active-link">
                  Available
                </Link>
              </li>
              <li>
                <Link to="/collection-container" activeClassName="active-link">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="menu-btn" onClick={this.toggleHamburger}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </nav>
        <div className={`menu-wrapper ${this.state.navBarActiveClass}`}>
          <div className={`phone-menu ${this.state.navBarActiveClass}`}>
            <button onClick={this.toggleHamburger}>Close Menu</button>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/available-summary">Available</Link>
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
        </div>
      </>
    );
  }
};

export default Navbar;
