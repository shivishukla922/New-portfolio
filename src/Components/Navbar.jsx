import React, { useState } from "react";
import "./Navbar.css";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("about");
  return (
    <div className="navbar">
      <img className="logo" src="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>{" "}
          </AnchorLink>
          {menu === "about" ? <img alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>{" "}
          </AnchorLink>
          {menu === "projects" ? <img alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>{" "}
          </AnchorLink>
          {menu === "contact" ? <img alt="" /> : <></>}
        </li>
      </ul>
      <div className="connet-btn">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Let's Connect{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
