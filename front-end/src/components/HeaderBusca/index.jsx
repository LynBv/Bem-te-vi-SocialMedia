import { Link } from "react-router-dom";
import * as styles from "../HeaderBusca/HeaderBusca.module.css";
import Login from "../../pages/Login";

export default function HeaderBusca({
  handleSubmit,
  handleInputChange,
  busca,
}) {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}></div>
      {/* <Link to={"/"} element={<Feed />}></Link> */}
      {/* <Link to={"/login"} element={<Login />}>Login</Link> */}
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
