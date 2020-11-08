import React, { Fragment, useState } from "react";

import { v4 as uuidv4 } from "uuid";
const Formulario = ({ crearCita }) => {
  //Crear state de citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //   funcion que se ejecuta cada que un usuario escribe en un input

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extarer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Enviar folmulario : Boton

  const submitCita = (e) => {
    e.preventDefault();

    // Validar

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //eliminar el mensaje previo
    actualizarError(false);

    // Asignar ID
    cita.id = uuidv4();
    // Crear la cita
    crearCita(cita);

    //reiniciar el form

    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligtorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>

        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre del propietario</label>

        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario de la mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>fecha</label>

        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>hora</label>

        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>

        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
