import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import RoutesPath from "../../contants/routesPath";
import "./style.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Ex: APX313" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to={RoutesPath.Register} className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Ainda não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
