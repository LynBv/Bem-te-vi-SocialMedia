import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FotoAndNome from "../../components/FotoAndNome";
import * as styles from "./Usuario.module.css";
import Botao from "../../components/BotaoCondicionalBusca";

export default function Busca() {
  const [busca, setBusca] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [nomeCompleto, setNomeCompleto] = useState("");

  const getUsuario = () => {
    axios
      .get(`http://localhost:8080/usuarios/busca/${busca}`)
      .then((response) => {
        setUsuarios(response.data);
        montandoNomeCompleto(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUsuario();
  };

  const montandoNomeCompleto = (usuario) => {
    return setNomeCompleto(usuario.nome + " " + usuario.sobrenome);
  };

  console.log({ nomeCompleto });

  return (
    <div>
      <div className={styles.busca}>
        <form onSubmit={handleSubmit}>
          <label>Busca</label>
          <input
            type="text"
            placeholder="Digite um nome..."
            name="busca"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <div>
            <Botao title={"Buscar"} />
          </div>
        </form>
      </div>
      <div className={styles.cardUsuariosLi}>
        <div className={styles.cardUsuarioInfo}>
          {usuarios.map((usuario, index) => (
            <li key={index} className={styles.li}>
              <FotoAndNome
                nome={usuario.nome}
                sobrenome={usuario.sobrenome}
                status={true}
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
