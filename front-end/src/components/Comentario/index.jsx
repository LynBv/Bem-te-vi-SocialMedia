import * as styles from "./Comentario.module.css";
import Avatar from "../../assets/avatar.svg";
import { MdDeleteForever } from "react-icons/md";

export default function Comentario({ comentario, deletar }) {
  return (
    <div className={styles.comentarioCard}>
      <div className={styles.foto}>
        <img src={Avatar} alt="Foto de perfil" className={styles.avatar} />
      </div>
      <div className={styles.conteudo}>
        <h1 className={styles.nomeUsuario}>{comentario?.usuarioNome}</h1>
        <p className={styles.textoComentario}>{comentario?.texto}</p>
        <div className={styles.detalhes}>
          <button onClick={deletar} className={styles.deleteButton}>
            <MdDeleteForever />
          </button>
          <p className={styles.dataCriacao}>{comentario?.dataCriacao}</p>
        </div>
      </div>
    </div>
  );
}
