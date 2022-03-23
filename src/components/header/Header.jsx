import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/houmLogo.svg" alt="Logo" />
    </header>
  );
};

export default Header;
