import { Link } from "react-router-dom";
import * as styles from "../HeaderBusca/HeaderBusca.module.css";
import Login from "../../pages/Login";
import Feed from "../../pages/Feed";
import Logo from "../../assets/logo-bem-te-vi.svg";

export default function HeaderBusca({
  handleSubmit,
  handleInputChange,
  busca,
}) {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.navBar}>
        <Link to={"/post/:id"} element={<Feed />} className={styles.opcaoNavBar}>
          Postagens
        </Link>
        <Link to={"/login"} element={<Login />} className={styles.opcaoNavBar}>
          Login
        </Link>
      </div>
      <div className={styles.busca}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={busca}
            onChange={handleInputChange}
            placeholder="Buscar usuário"
          />
          <button type="submit" className={styles.buttonBusca}>
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}
