import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import RoutesPath from "../../contants/routesPath";
import "./style.css";
import api from "../../services/api";
import { logoImg, heroesImg } from "../../helper/assetsAccess";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/session", { id });
      console.log(response.data);

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push(RoutesPath.Profile);
    } catch (error) {
      alert("Erro ao entrar, tente novamente mais tarde");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Ex: APX313"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
