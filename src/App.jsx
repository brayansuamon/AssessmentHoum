import { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.scss";
import Header from "./components/header/Header";
import Searcher from "./components/searcher/Searcher";
import Boxgifs from "./components/boxgifs/Boxgifs";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Header />
      <Searcher />
      <Boxgifs />
    </div>
  );
}

export default App;
