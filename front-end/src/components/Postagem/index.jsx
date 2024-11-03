import axios from "axios";
import React, { useEffect, useState } from "react";
import * as styles from "./Postagem.module.css";
import Avatar from "../../assets/avatar.svg";

export default function Postagem({id}) {
  const [postagem, setPostagem] = useState({usuarioNome: "", conteudo: ""});

  const pegarPostagem = () => {
    axios
      .get(`http://localhost:8080/postagens/${id}`)
      .then((response) => setPostagem(response.data))
      .catch((error) => console.log(error))
      .finally(() => console.log("acabou o get"));
  };

  useEffect(() => {
    pegarPostagem();
  }, []);

  const mostrarPostagem = ()=> console.log(postagem);

  return (
    <div>
      <div className={styles.postCard}>
        <div className={styles.info}>
          <img src={Avatar} alt="Foto de perfil" className={styles.avatar} />
          <h1 className={styles.nomeUsuario}>{postagem.usuarioNome}</h1>
        </div>
        <p className={styles.textoPost}>{postagem.conteudo}</p>
      </div>
    </div>
  );
}
