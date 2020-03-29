import React from "react";
import "./style.css";
import { logoImg } from "../../helper/assetsAccess";
import { Link } from "react-router-dom";
import RoutesPath from "../../contants/routesPath";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default function Profile(params) {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Olá, ONG_NAME</span>

        <Link className="button-new-incident" to={RoutesPath.NewIncident}>
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <button type="button">
            <FiTrash2 size={16} color="a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <button type="button">
            <FiTrash2 size={16} color="a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <button type="button">
            <FiTrash2 size={16} color="a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <strong>Caso:</strong>
          <p>Caso de teste</p>

          <button type="button">
            <FiTrash2 size={16} color="a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
