import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import RoutesPath from "../../contants/routesPath";
import { logoImg } from "../../helper/assetsAccess";

export default function NewIncident(params) {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro de caso</h1>
          <p>
            Descreva o caso detalhadamento para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to={RoutesPath.Profile}>
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição"></textarea>
          <input type="text" placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
