import React, { useEffect, useState } from "react";
import * as styles from "./Post.module.css";
import Postagem from "../../components/Postagem";
import { useParams } from "react-router-dom";
import Comentario from "../../components/Comentario";
import axios from "axios";
import Comentar from "../../components/Comentar";
import Header from "../../components/Header";

export default function Post() {
  const { id } = useParams();
  const [postagem, setPostagem] = useState({ usuarioNome: "", conteudo: "" });
  const [comentarios, setComentarios] = useState([]);
  let token =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlbHluLnZpcmdpbmlvQGV4YW1wbGUuY29tIiwiZXhwIjoxNzMxNjUzNDU0LCJpZCI6Mn0.i4-L_Bx-8w3pBA7Nf5uUsp2c-1jGYL34UfkoGDeGcTIE9QpVCCDVidL5ohFvCEvB";

  const pegarPostagem = () => {
    axios
      .get(`http://localhost:8080/postagens/${id}`)
      .then((response) => {
        setPostagem(response.data);
        setComentarios(response.data.comentarios);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("acabou o get"));
  };

  const comentar = (conteudo) => {
    axios
      .post(
        "http://localhost:8080/comentarios",
        {
          texto: `${conteudo}`,
          idPostagem: `${id}`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        console.log(response);
        setComentarios([response.data, ...comentarios]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    pegarPostagem();
  }, []);

  const montarComentario = comentarios.map((comentario) => (
    <Comentario key={comentario.id} comentario={comentario} />
  ));

  return (
    <main>
      <Header />
      <div className={styles.post}>
        <div className={styles.mainArea}>
          <div className={styles.PostArea}>
            <Postagem postagem={postagem} />
            <Comentar comentar={comentar} />
          </div>
          <div className={styles.comentariosArea}>{montarComentario}</div>
        </div>
      </div>
    </main>
  );
}
