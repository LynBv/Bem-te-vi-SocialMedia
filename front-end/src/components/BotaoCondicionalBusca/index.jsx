import React from "react";
import * as style from "./Botao.module.css";

export default function BotaoCondicionalBusca({ status }) {
  return (
    <div>
      <button className={style.button}>
        {status ? "Deixar de Seguir" : "Seguir"}
      </button>
    </div>
  );
}
