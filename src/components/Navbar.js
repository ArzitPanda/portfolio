import React from "react";
import "../style/Navbar.css";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-hero">
      <div className="nav-comp" id="name">
        <div>Arzit</div>
        <div>Panda</div>
      </div>
      <div className="nav-comp" id="menu">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <a href="https://arzblogs.vercel.app/">Blogs</a>
        </li>
        <li>
          <Link to="/umm">garbage</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact" className="link">
            contact
          </Link>
        </li>
      </div>
      <div className="nav-comp" id="social">
        <div>
          <a
            href="https://twitter.com/PandaArzit"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitter color="#00ACEE" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/ArzitPanda"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub color="white" />
          </a>
        </div>
        <div>
          <SiGooglemessages color="orange" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
