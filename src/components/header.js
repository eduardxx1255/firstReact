import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand">Navegacion</div>
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
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Editor de texto
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Allpost">
              Traer todos los post
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Single">
              Traer post especifico
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Pokemon">
              Busca tu Pokemon
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Animation">
              Animacion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
