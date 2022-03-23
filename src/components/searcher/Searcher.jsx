import React from "react";
import Autocomplete from "./autocomplete/Autocomplete";
import Menu from "./menu/Menu";
import styles from "./Searcher.module.scss";

const Searcher = () => {
  return (
    <div className={styles.searcher}>
      <Menu />
      <Autocomplete />
    </div>
  );
};

export default Searcher;
