import React, { useState } from "react";
import * as styles from "./BoxEdit.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function BoxEdit({ editar, idComentario , texto}) {
  const [conteudo, setConteudo] = useState(texto);

  return (
    <div className={styles.comentar}>
      <input
        className={styles.comentarInput}
        type="text"
        name="comentario"
        placeholder="deixe seu comentario..."
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
      />
      <button
        onClick={() => {
          editar(idComentario, conteudo);
          setConteudo("");
        }}
        className={styles.comentarButton}
      >
        <RiSendPlane2Fill />
      </button>
    </div>
  );
}
