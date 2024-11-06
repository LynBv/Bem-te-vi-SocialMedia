import React from "react";
import * as styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import Feed from "../../pages/Feed";
import Login from "../../pages/Login";
import Busca from "../../pages/Usuarios/index";
import Logo from "../../assets/logo-bem-te-vi.svg";

export default function Header() {
  function limparTokenCache() {
    const chaveToken = Object.keys(localStorage).find((key) =>
      localStorage.getItem(key).startsWith("Bearer ")
    );

    localStorage.removeItem(chaveToken);
  }

  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navBar}>
        <div className={styles.navLinks}>
          <Link
            to={"/"}
            element={<Feed />}
            className={styles.opcaoNavBar}
          >
            Feed
          </Link>
          <Link
            to={"/busca"}
            element={<Busca />}
            className={styles.opcaoNavBar}
          >
            Buscar
          </Link>
          <Link
            to={"/login"}
            element={<Login />}
            className={styles.opcaoNavBar}
            onClick={limparTokenCache}
          >
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
}
