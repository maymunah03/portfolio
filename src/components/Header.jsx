import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; 
import logo from './mhlogo.svg';

export const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
