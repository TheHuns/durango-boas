import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  state = {
    active: false,
    navBarActiveClass: ""
  };

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    const { navbarBackground } = this.props;

    return (
      <nav
        style={{
          backgroundColor: navbarBackground
            ? `${navbarBackground}`
            : "transparent"
        }}
      >
        <div className="brand">
          <Link to="/">DurangoBoas</Link>
        </div>
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
      </nav>
    );
  }
};

export default Navbar;
