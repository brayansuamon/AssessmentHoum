import { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.scss";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
