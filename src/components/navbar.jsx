import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <div>
       <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/mounting">Mounting</Link>
          </li>
          <li>
            <Link to="/unmouting">unmounting</Link>
          </li>
          <li>
            <Link to="/updating">updating</Link>
          </li>
        </ul>
        <hr />
      </div> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li
              class="nav-item "
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <Link class="nav-Link" to="/mounting">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li
              class="nav-item"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <Link class="nav-Link" to="/updating">
                updating
              </Link>
            </li>
            <li
              class="nav-item"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <Link to="/unmouting">unmounting</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
