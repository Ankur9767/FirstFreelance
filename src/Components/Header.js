import React from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand">KaosmettikaLab</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-lg-row justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">About us</a>
        </li>
        </ul>
    </div>
  </div>
</nav> */}
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div className="logo">
            <Link className="link" to="/">
              <a className="navbar-brand">Kaosmettika Lab</a>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="link" to="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/product">
                  <a className="nav-link active">Products</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/about">
                  <a className="nav-link active">About us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/contact">
                  <a className="nav-link active">Contact us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
