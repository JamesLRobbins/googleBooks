import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="#">
        Search
      </a>
      <a className="navbar-brand" href="#">
        Saved
      </a>
    </nav>
  );
}

export default Header;
