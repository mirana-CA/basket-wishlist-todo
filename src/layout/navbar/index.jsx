import React, { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { BasketContext } from "../../context/basketContext";

const Navbar = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="main_nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Brand
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todolist">
                  Todo
                </Link>
              </li>
            </ul>

            <div className="navbar_rs">
              <span className="navbar-text">
                <Link className="nav-link" to="/wishlist">
                  <FaRegHeart />
                </Link>
              </span>
              <span className="navbar-text">
                <Link className="nav-link" to="/basket">
                  <LuShoppingCart />{" "}
                  {basket.length != 0 ? <sup>{basket.length}</sup> : ""}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
