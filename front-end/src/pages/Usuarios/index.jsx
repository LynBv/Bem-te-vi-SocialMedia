import axios from "axios";
import React, { useEffect, useState } from "react";
import FotoAndNome from "../../components/FotoAndNome";
import * as styles from "./Usuario.module.css";
import HeaderBusca from "../../components/HeaderBusca";
import BotaoCondicionalBusca from "../../components/BotaoCondicionalBusca";

export default function Busca() {
  const [busca, setBusca] = useState("");
  const [seguindo, setSeguindo] = useState([]);

  const token =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJtaWx0b24ubWVuZGVzQGV4YW1wbGUuY29tIiwiZXhwIjoxNzMxNzEzMTcyLCJpZCI6OH0.x0IIc2GhHSLLw6jJr2iBuVT2jrPjN40gc5HJZr0GTxM3q0Pv_Js8eQf0-2w7ytCt"; // Coloque seu token aqui

  const getSeguindo = () => {
    axios
      .get(`http://localhost:8080/relacionamentos/sigo/${busca}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setSeguindo(response.data);
      })
      .catch(() => console.log("Erro ao buscar seguindo"));
  };

  console.log(seguindo);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSeguindo();
  };

  const handleInputChange = (e) => {
    setBusca(e.target.value);
  };

  return (
    <div>
      <HeaderBusca
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        busca={busca}
      />
      <div className={styles.cardUsuariosLi}>
        <div className={styles.cardUsuarioInfo}>
          {seguindo.map((usuario, index) => (
            <li key={index} className={styles.li}>
              <FotoAndNome
                nome={usuario.nomeSeguido}
                sobrenome={usuario.sobrenome}
                status={usuario.status}
              />{" "}
              <div className={styles.areaBotao}>
                <BotaoCondicionalBusca status={usuario.status} idSeguido={usuario.idSeguido} token={token} />
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}