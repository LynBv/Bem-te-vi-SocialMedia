import * as styles from "./Postagem.module.css";
import Avatar from "../../assets/avatar.svg";

export default function Postagem({ postagem }) {
  return (
    <div className={styles.postCard}>
      <div className={styles.foto}>
        <img src={Avatar} alt="Foto de perfil" className={styles.avatar} />
      </div>
      <div className={styles.conteudo}>
        <div className={styles.info}>
        <h1 className={styles.nomeUsuario}>{postagem.usuarioNome}</h1>
        <p className={styles.dataCriacao}>{postagem.dataCriacao}</p>
        </div>
        <p className={styles.textoPost}>{postagem.conteudo}</p>
      </div>
    </div>
  );
}
