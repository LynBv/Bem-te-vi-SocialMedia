import React, { useState } from "react";
import * as style from "./Botao.module.css";
import axios from "axios";

export default function BotaoCondicionalBusca({ status, idSeguido, token }) {
  const [estadoRelacionamento, setEstadoRelacionamento] = useState(status);
  const seguir = () => {
    axios
      .post(`http://localhost:8080/relacionamentos/${idSeguido}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log("Você começou a seguir o usuário.");
        setEstadoRelacionamento(true); 
      })
      .catch((error) => console.error("Erro ao seguir:", error));
  };

  const deixarDeSeguir = () => {
    axios
      .delete(`http://localhost:8080/relacionamentos/${idSeguido}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log("Você deixou de seguir o usuário.");
        setEstadoRelacionamento(false); 
      })
      .catch((error) => console.error("Erro ao deixar de seguir:", error));
  };

  return (
    <div>
      <button
        className={`${style.button} ${
          status ? style.deixarDeSeguir : style.seguir
        }`}
        onClick={status ? deixarDeSeguir : seguir}
      >
        {status ? "Deixar de Seguir" : "Seguir"}
      </button>
    </div>
  );
}