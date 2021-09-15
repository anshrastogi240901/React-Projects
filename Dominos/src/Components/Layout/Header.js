import React from "react";
import styles from "./Header.module.css";
import pizza from "../../assets/pizza.jpg";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/dominos.png";
function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <img src={logo} alt="Domino's Pizza" className={styles.logo} />
        <h2>Domino's Pizza</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={pizza} alt="Pizzaaaaahhhh!!!!!!!!!!!!!!!!!!!!" />
      </div>
    </React.Fragment>
  );
}
export default Header;
