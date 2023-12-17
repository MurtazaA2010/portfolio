import React from "react";
import { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";

const ClassicHeader = ({ handleNavClick }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0 sticky-top " +
          (stickyHeader ? "sticky-on" : "")
        }
      >
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2">
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: "pointer" }}
              className="logo"
              to="home"
              title="Simone"
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              {" "}
              <img src="images/logo-light.png" alt="Simone" />{" "}
            </Link>
            {/* Logo End */}
          </div>
          <div className="col col-lg-8 navbar-accordion">
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose);
              }}
              className={
                isNavModalClose
                  ? "navbar-toggler ms-auto"
                  : "navbar-toggler ms-auto show"
              }
              id="navbar-toggler"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                isNavModalClose
                  ? "collapse navbar-collapse justify-content-center "
                  : "show navbar-collapse justify-content-center"
              }
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="home"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    What I Do
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="resume"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="testimonial"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Client
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end">
            <ul className="social-icons social-icons-light">
              <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                  <a
                    href="http://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href="http://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-dribbble">
                <Tooltip text="Dribbble" placement="top">
                  <a
                    href="http://www.dribbble.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default ClassicHeader;
