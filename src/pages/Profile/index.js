import React from "react";
import "./style.css";
import { logoImg } from "../../helper/assetsAccess";
import { Link, useHistory } from "react-router-dom";
import RoutesPath from "../../contants/routesPath";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";

export default function Profile(params) {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data.incidents);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId }
      });
      setIncidents(incidents.filter(incidents => incidents.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente mais tarde.");
    }
  }

  function handleLogOut() {
    localStorage.clear();
    history.push(RoutesPath.Logon);
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Olá, {ongName}</span>

        <Link className="button-new-incident" to={RoutesPath.NewIncident}>
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogOut}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(({ id, title, description, value }, idx) => (
          <li key={id + idx}>
            <strong>Caso:</strong>
            <p>{title}</p>

            <strong>Descrição:</strong>
            <p>{description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(value)}
            </p>

            <button type="button" onClick={() => handleDeleteIncident(id)}>
              <FiTrash2 size={16} color="a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
