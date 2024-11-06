import React from "react";
import * as styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import Feed from "../../pages/Feed";
import Login from "../../pages/Login";
import Busca from "../../pages/Usuarios/index";
import Logo from "../../assets/logo-bem-te-vi.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navBar}>
        <div className={styles.navLinks}>
          <Link
            to={"/post/:id"}
            element={<Feed />}
            className={styles.opcaoNavBar}
          >
            Postagens
          </Link>
          <Link
            to={"/login"}
            element={<Login />}
            className={styles.opcaoNavBar}
          >
            Login
          </Link>
          <Link
            to={"/busca"}
            element={<Busca />}
            className={styles.opcaoNavBar}
          >
            Buscar
          </Link>
        </div>
      </div>
    </div>
  );
}
