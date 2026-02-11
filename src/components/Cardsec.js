import React from "react";
import { Link } from "react-router-dom";

export default function Cardsec(props) {
  return (
    <div className={`card bg-${props.mode} text-white m-4 csw`}>
      <img
        className="card-img"
        src={props.src}
        alt={props.title}   // ✅ Added alt text
      />

      <div className="card-img-overlay d-flex justify-content-center align-items-center">
        <Link
          to={props.destin}
          className="card-title h1 text-decoration-none text-white"
        >
          {props.title}
        </Link>
      </div>
    </div>
  );
}