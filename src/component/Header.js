import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 shadow-sm">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to={"/"}>
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
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>
    </div>
  );
}

export default Header;
