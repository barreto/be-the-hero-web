import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import RoutesPath from "../../contants/routesPath";
import { logoImg } from "../../helper/assetsAccess";
import api from "../../services/api";

export default function NewIncident(params) {
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = { title, description, value };
    const headers = { Authorization: ongId };
    console.log("ongId", ongId, "headers", headers);

    try {
      await api.post("/incidents", data, { headers });
      history.push(RoutesPath.Profile);
    } catch (error) {
      alert("Erro ao cadastrar um novo caso, tente novamente mais tarde.");
    }
  }

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

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
