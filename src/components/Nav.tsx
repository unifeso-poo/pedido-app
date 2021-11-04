import React from "react"
import { FaHome, FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { Sidenav } from "./Sidenav";

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <nav className="nav">
        <a onClick={() => setIsOpen(true)} className="nav__button">
          <FaBars />
        </a>
        <Link to="/" className="nav__button">
          <FaHome />
        </Link>
        <Link to="/profile" className="nav__button">
          <FaUserCircle />
        </Link>
      </nav>
      <Sidenav isOpen={isOpen} closeHandler={() => setIsOpen(false)} />
    </div>
  );
}