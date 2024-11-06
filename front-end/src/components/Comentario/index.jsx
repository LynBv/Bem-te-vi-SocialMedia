import * as styles from "./Comentario.module.css";
import Avatar from "../../assets/avatar.svg";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import BoxEdit from "../BoxEdit";
import { useState } from "react";

export default function Comentario({
  comentario,
  deletar,
  editar,
  idComentario,
  idProprietario,
  idUsuario,
}) {
  const [editando, setEditando] = useState(false);
  function editarEConcluir(idComentario, conteudo) {
    editar(idComentario, conteudo);
    setEditando(false);
  }

  return (
    <div className={styles.comentarioCard}>
      <div className={styles.foto}>
        <img src={Avatar} alt="Foto de perfil" className={styles.avatar} />
      </div>
      <div className={styles.conteudo}>
        <h1 className={styles.nomeUsuario}>{comentario?.usuarioNome}</h1>
        <div>
          {editando ? (
            <BoxEdit
              idComentario={idComentario}
              editar={editarEConcluir}
              texto={comentario?.texto}
            />
          ) : (
            <p className={styles.textoComentario}> {comentario?.texto}</p>
          )}
        </div>
        <div className={styles.detalhes}>
          {idProprietario === idUsuario.id && (
            <div>
              <button onClick={deletar} className={styles.deleteButton}>
                <MdDeleteForever />
              </button>
              <button
                onClick={() => setEditando(!editando)}
                className={styles.editButton}
              >
                <FaEdit />
              </button>
            </div>
          )}
          <p className={styles.dataCriacao}>{comentario?.dataCriacao}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
