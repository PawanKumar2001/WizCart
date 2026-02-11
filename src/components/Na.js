import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Na(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixednav`}>
      <div className="container-fluid">
        <a className="navbar-brand textdark" href="#">{props.title}</a>
        <button className="navbar-toggler rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="bi bi-caret-down"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Others</a>
              <ul className="dropdown-menu mb-3">
                <li><Link className="dropdown-item" to="/account">My Account</Link></li>
                <li><Link className="dropdown-item" to="/sell">Sell</Link></li>
                <li><Link className="dropdown-item" to="/helpline">Helpline</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex align-items-center ms-auto">
            <div className="input-group">
              <input className="form-control rounded-pill" type="search" placeholder="Search Products" aria-label="Search" />
              <button className="btn btn-outline-secondary rounded-pill ms-2" type="submit">Search</button>
            </div>
            <div className="form-check form-switch ms-3">
              <input className="form-check-input bg-secondary" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label textcont ms-1" htmlFor="flexSwitchCheckDefault">🌜</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Na.propTypes = {
  title: PropTypes.string
}

Na.defaultProps = {
  title: "Title Here"
}