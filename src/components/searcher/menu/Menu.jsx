import React from "react";
import { useContext } from "react";
import { Appcontext } from "../../../context/StateContext";
import RequestAutocomplete from "../request/RequestAutocomplete";
import RequestListofgifs from "../request/RequestListofgifs";
import "./Menu.scss";

const Menu = () => {
  const { search, setDataauto, setSearch, setData } = useContext(Appcontext);

  const actualizarBuscar = (e) => {
    e.preventDefault();
    setDataauto([]);
    RequestListofgifs(search)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos.data);
        // setBuscar(false);
      })
      .catch((error) => {
        console.log("No se encontró la data autocomplete");
      });
  };

  const actualizarSearch = (e) => {
    RequestAutocomplete(e.target.value)
      .then((response) => {
        return response.json();
      })
      .then((dataaut) => {
        setDataauto(dataaut.data);
        //Acá deberia activar el texto de autocomplete
      });
    setSearch(e.target.value);
  };

  return (
    <form className={`${"BuscadorBlanco"} buscador`}>
      <input
        type="search"
        placeholder="Buscar Hero Cards"
        className={`InputLigth`}
        value={search}
        onChange={actualizarSearch}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            actualizarBuscar(e);
          }
        }}
      />

      <button type="button" className="busqueda" onClick={actualizarBuscar}>
        <img src="./images/icon-search.svg" alt="Ligth" />
      </button>
    </form>
  );
};

export default Menu;
