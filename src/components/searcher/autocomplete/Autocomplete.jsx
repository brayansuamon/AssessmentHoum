import React from "react";
import { useContext } from "react";
import { Appcontext } from "../../../context/StateContext";
import RequestListofgifs from "../request/RequestListofgifs";
import "./Autocomplete.scss";

const Autocomplete = () => {
  const { dataauto, setData, setSearch, setDataauto } = useContext(Appcontext);

  const cambio = (datoa) => {
    setSearch(datoa.name);
    // setBuscar(true);
    setDataauto([]);
    RequestListofgifs(datoa.name)
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

  console.log(dataauto.length);
  return (
    <>
      {dataauto.length > 0 ? (
        <ul className="formulario">
          {dataauto.map((datoa) => {
            return (
              <li
                onClick={() => cambio(datoa)}
                key={datoa.analytics_response_payload}
              >
                {datoa.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Autocomplete;
