import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function index() {
  const loc = useLocation();
  const navObj = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {navObj.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    className={`nav-link ${loc === item.path && "active"}`}
                    aria-current="page"
                    key={index}
                  >
                    {item.title}
                    {console.log(index + " : " + item.title)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default index;
