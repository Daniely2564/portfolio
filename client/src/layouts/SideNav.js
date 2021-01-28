import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledSideNav } from "../styles/layoutstyles";
import profile from "../img/my-profile.jpg";

const SideNav = (props) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  return (
    <StyledSideNav activeItem={activeItem}>
      <div className="profile-picture">
        <img src={profile} alt="profile" />
      </div>
      <ul className="nav-list">
        <Link to="/">
          <li
            onMouseOver={() => setActiveItem("/")}
            className={activeItem === "/" ? "active" : ""}
          >
            <i className="fas fa-user"></i> About Me
          </li>
        </Link>
        <Link to="/education">
          <li
            onMouseOver={() => setActiveItem("/education")}
            className={activeItem === "/education" ? "active" : ""}
          >
            <i className="fas fa-graduation-cap"></i> Education
          </li>
        </Link>
        <Link to="/experience">
          <li
            onMouseOver={() => setActiveItem("/experience")}
            className={activeItem === "/experience" ? "active" : ""}
          >
            <i className="fas fa-briefcase"></i> Experience
          </li>
        </Link>
        <Link to="/project">
          <li
            onMouseOver={() => setActiveItem("/project")}
            className={activeItem === "/project" ? "active" : ""}
          >
            <i className="fas fa-cog"></i> Project
          </li>
        </Link>
        <Link to="/certificate">
          <li
            onMouseOver={() => setActiveItem("/certificate")}
            className={activeItem === "/certificate" ? "active" : ""}
          >
            <i className="fas fa-certificate"></i> Certifications
          </li>
        </Link>
      </ul>
    </StyledSideNav>
  );
};

export default SideNav;
