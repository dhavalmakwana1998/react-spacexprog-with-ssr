import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar ">
      <Link className="" to={"/"}>
        <img alt="logo" src="./images/logo192.png" />
        <p className="text-tagline text-muted m-0">SpaceX Launch Program</p>
      </Link>
      <button
        className="navbar-toggler d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-filter text-primary fa-2x"></i>
      </button>
    </header>
  );
}

export default Header;
