import React, { useEffect, useState } from "react";
import * as styles from "./Post.module.css";
import Postagem from "../../components/Postagem";
import { useParams } from "react-router-dom";
import Comentario from "../../components/Comentario";
import axios from "axios";
import Comentar from "../../components/Comentar";
import LayoutPrincipal from "../../components/LayoutPrincipal";

export default function Post() {
  const { id } = useParams();
  const [postagem, setPostagem] = useState({ usuarioNome: "", conteudo: "" });
  const [comentarios, setComentarios] = useState([]);
  // let token =
  //   "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlbHluLnZpcmdpbmlvQGV4YW1wbGUuY29tIiwiZXhwIjoxNzMxNjUzNDU0LCJpZCI6Mn0.i4-L_Bx-8w3pBA7Nf5uUsp2c-1jGYL34UfkoGDeGcTIE9QpVCCDVidL5ohFvCEvB";

  const token = localStorage.getItem("token").substring(7);

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

  function editaComentario(idComentario, conteudo) {
    axios
      .put(
        `http://localhost:8080/comentarios/${idComentario}`,
        {
          texto: `${conteudo}`,
          idPostagem: `${id}`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        console.log(response);
        const novosComentarios = comentarios.map((comentario) =>
          comentario.id !== idComentario ? comentario : response.data
        );
        setComentarios(novosComentarios);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function apagarComentario(id) {
    axios
      .delete(`http://localhost:8080/comentarios/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log("Post Apagado!");
        setComentarios(
          comentarios.filter((comentario) => comentario.id !== id)
        );
      })
      .catch(() => console.log("Problemas na requisição"));
  }

  useEffect(() => {
    pegarPostagem();
  }, []);

  const montarComentario = comentarios
    .sort(function (a, b) {
      a = a.id;
      b = b.id;
      return b - a;
    })
    .map((comentario) => (
      <Comentario
        editar={editaComentario}
        deletar={() => apagarComentario(comentario.id)}
        idComentario={comentario.id}
        key={comentario.id}
        comentario={comentario}
      />
    ));

  return (
    <LayoutPrincipal>
      <div className={styles.pageContainer}>
        <div className={styles.post}>
          <div className={styles.mainArea}>
            <div className={styles.PostArea}>
              <Postagem postagem={postagem} />
              <Comentar comentar={comentar} />
            </div>
            <div className={styles.comentariosArea}>{montarComentario}</div>
          </div>
        </div>
      </div>
    </LayoutPrincipal>
  );
}
