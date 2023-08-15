//function////
import React from "react";
import { Link } from "react-router-dom";
import "../header.css";

export default function Header(props) {
  console.log("header props", props);
  return (
    <>
      <div className="header">
        <h1>HEADER</h1>
        <Link className="btn btn-primary" to ="/login">LOGIN</Link>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contactus">
                contact US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/store">
                STORE
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/getstoredata">
                STORE Data
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                API DEMO1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                API DEMO 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                API DEMO 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo4">
                API DEMO 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo5">
                API DEMO 5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo6">
                API DEMO 6
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
