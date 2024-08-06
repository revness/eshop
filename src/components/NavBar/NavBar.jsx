import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <NavLink className={styles.Javid} to="/">
        Javid Dones
      </NavLink>
      <div className={styles.Cart}>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
