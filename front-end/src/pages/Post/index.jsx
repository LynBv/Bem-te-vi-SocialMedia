import React from "react";
import Avatar from "../../assets/avatar.svg";
import * as styles from "./Post.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import Postagem from "../../components/Postagem";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div className={styles.post}>
      <div className={styles.mainArea}>
        <div className={styles.PostArea}>
          <Postagem id={id}/>
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
        </div>
        <div className={styles.comentariosArea}>
          <div className={styles.comentarioCard}>
            <div className={styles.info}>
              <img
                src={Avatar}
                alt="Foto de perfil"
                className={styles.avatar}
              />
              <h1 className={styles.nomeUsuario}>Nome do usuario</h1>
            </div>
            <p className={styles.textoComentario}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              culpa tempore asperiores sunt quia veritatis soluta placeat quo
              accusamus, fugit excepturi in est dolor voluptas, perspiciatis
              numquam? Ad, natus rem.
            </p>
          </div>
          <div className={styles.comentarioCard}>
            <div className={styles.info}>
              <img
                src={Avatar}
                alt="Foto de perfil"
                className={styles.avatar}
              />
              <h1 className={styles.nomeUsuario}>Nome do usuario</h1>
            </div>
            <p className={styles.textoComentario}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              culpa tempore asperiores sunt quia veritatis soluta placeat quo
              accusamus, fugit excepturi in est dolor voluptas, perspiciatis
              numquam? Ad, natus rem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
