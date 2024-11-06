import Footer from "../Footer";
import Header from "../Header";
import * as styles from "./LayoutPrincipal.module.css"


export default function LayoutPrincipal({ children }) {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}