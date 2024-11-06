import Footer from "../Footer";
import HeaderBusca from "../HeaderBusca";
import * as styles from "./LayoutPrincipal.module.css";

export default function LayoutBusca({
  children,
  handleSubmit,
  handleInputChange,
  busca,
}) {
  return (
    <div className={styles.pageContainer}>
      <HeaderBusca
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        busca={busca}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
