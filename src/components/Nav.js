import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <div className="line1"></div>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <div className="line2"></div>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <div className="line3"></div>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav;
