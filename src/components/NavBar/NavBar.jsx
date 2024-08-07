import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.wrapper}>
        <div className={styles.Left}>
          <NavLink className={styles.Links} to="/">
            Normal Supply Co.
          </NavLink>
        </div>
        <div className={styles.Right}>
          <NavLink className={styles.Links} to="/favourites">
            Favourites
          </NavLink>
        </div>
        <div>
          <NavLink className={styles.Links} to="/cart">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
