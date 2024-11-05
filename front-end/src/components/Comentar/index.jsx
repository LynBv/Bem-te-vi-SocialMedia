import React, { useState } from "react";
import * as styles from "./Comentar.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function Comentar({ comentar }) {
  const [conteudo, setConteudo] = useState("");

  return (
    <div className={styles.comentar}>
      <input
        className={styles.comentarInput}
        type="text"
        name="comentario"
        placeholder="deixe seu comentario..."
        value={conteudo}
        onChange={(e)=> setConteudo(e.target.value)}
      />
      <button
        onClick={() => {comentar(conteudo), setConteudo("")}}
        className={styles.comentarButton}
      >
        <RiSendPlane2Fill />
      </button>
    </div>
  );
}
