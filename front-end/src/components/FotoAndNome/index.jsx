import React from "react";
import Avatar from "../../assets/avatar.svg";
import * as style from "./FotoAndNome.module.css";
import BotaoCondicionalBusca from "../BotaoCondicionalBusca";

export default function FotoAndNome({ nome, sobrenome, status }) {
  return (
    <div className={style.userCard}>
      <div className={style.info}>
        <img src={Avatar} alt="Foto de perfil" className={style.avatar} />
        <h1 className={style.nomeCompletoUsuario}>
          {nome} {sobrenome}
        </h1>
      </div>
      <div className={style.areaBotao}>
        <BotaoCondicionalBusca status={status} />
      </div>
    </div>
  );
}
