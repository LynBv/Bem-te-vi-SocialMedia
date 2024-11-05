import axios from "axios";
import React, { useEffect, useState } from "react";
import FotoAndNome from "../../components/FotoAndNome";
import * as styles from "./Usuario.module.css";
import HeaderBusca from "../../components/HeaderBusca";

export default function Busca() {
  const [usuarios, setUsuarios] = useState([]);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [busca, setBusca] = useState("");

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

  const handleInputChange = (e) => {
    setBusca(e.target.value);
  };

  const montandoNomeCompleto = (usuario) => {
    return setNomeCompleto(usuario.nome + " " + usuario.sobrenome);
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
