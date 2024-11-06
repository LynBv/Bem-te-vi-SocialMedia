import React from "react";
import * as styles from "./Footer.module.css";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className={styles.layoutFotter}>
      <div className={styles.conteudo}>
        <p className={styles.grupo}>Powered by <span className={styles.destaque}>&copy;Grupo 2</span></p>
        <div className={styles.alunos}>
          <div className={styles.aluno}>
            <a
              className={styles.gitHub}
              href="https://github.com/LynBv"
              target="_blank"
            >
              <VscGithub />
            </a>
            <p>Elyn Virginio </p>
          </div>
          <div className={styles.aluno}>
            <a
              className={styles.gitHub}
              href="https://github.com/GabyReissinger"
              target="_blank"
            >
              <VscGithub />
            </a>
            <p>Gabriela Reissinger </p>
          </div>
          <div className={styles.aluno}>
            <a
              className={styles.gitHub}
              href="https://github.com/GabyReissinger"
              target="_blank"
            >
              <VscGithub />
            </a>
            <p>Pedro Cancella </p>
          </div>
          <div className={styles.aluno}>
            <a
              className={styles.gitHub}
              href="https://github.com/tainarabastosmoco"
              target="_blank"
            >
              <VscGithub />
            </a>
            <p>Tainara Bastos </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
