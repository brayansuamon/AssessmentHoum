import React from "react";
import "./Boxgifs.scss";
import { useContext, useState } from "react";
import { Appcontext } from "../../context/StateContext";
import Gifs from "./gifs/Gifs";

const Boxgifs = () => {
  //Importacion data
  const { data } = useContext(Appcontext);
  const [currentPage, setcurrentPage] = useState(0);

  //To Show only ten results
  const filteredcards = () => {
    return data.slice(currentPage, currentPage + 10);
  };
  //To send next page
  const nextPage = () => {
    if (currentPage <= data.length - 20) {
      setcurrentPage(currentPage + 10);
      console.log(currentPage);
    }
  };
  //To send prev page
  const prevPage = () => {
    if (currentPage > 0) setcurrentPage(currentPage - 10);
  };

  return (
    <section className={`ModoLi Fondogifs`}>
      <main className={`CajaBlanca Cajagifs`}>
        {data.length > 0 ? (
          <div>
            <h1 className={`ModoL Mensaje`}>Resultados Hero Cards</h1>
            <section className="buttons">
              <button onClick={prevPage}> Prev</button>
              <button onClick={nextPage}>Next Page</button>
            </section>
            <section className="FondoCaja">
              {filteredcards().map((gif) => {
                return <Gifs {...gif} key={gif.id} id={gif.id} />;
              })}
            </section>
            <section className="buttons">
              <button onClick={prevPage}> Prev</button>
              <button onClick={nextPage}>Next Page</button>
            </section>
          </div>
        ) : (
          <div className={`ModoL TituloGifs`}>
            <h1>Realiza tu busqueda</h1>
          </div>
        )}
      </main>
    </section>
  );
};

export default Boxgifs;
