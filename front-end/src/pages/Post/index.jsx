import React, { useEffect, useState } from "react";
import * as styles from "./Post.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import Postagem from "../../components/Postagem";
import { useParams } from "react-router-dom";
import Comentario from "../../components/Comentario";
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const [postagem, setPostagem] = useState({ usuarioNome: "", conteudo: "" });

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

  const montarComentario = postagem.comentarios?.map((comentario) => (
    <Comentario key={comentario.id} comentario={comentario} />
  ));

  return (
    <div className={styles.post}>
      <div className={styles.mainArea}>
        <div className={styles.PostArea}>
          <Postagem postagem={postagem} />
        </div>
        <div className={styles.comentar}>
          <input
            className={styles.comentarInput}
            type="text"
            name="comentario"
            placeholder="deixe seu comentario..."
          />
          <button className={styles.comentarButton}>
            <RiSendPlane2Fill />
          </button>
        </div>
        <div className={styles.comentariosArea}>{montarComentario}</div>
      </div>
    </div>
  );
}
