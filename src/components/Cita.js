import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{cita.mascota}</span>
        <br />
        Dueño: <span>{cita.propietario}</span>
        <br />
        Fecha: <span>{cita.fecha}</span>
        <br />
        Hora: <span>{cita.hora}</span>
        <br />
        Sintomas: <span>{cita.sintomas}</span>
        <br />
        <button
          className="button eliminar u-full-width"
          onClick={() => eliminarCita(cita.id)}
        >
          Eliminar &times;
        </button>
      </p>
    </div>
  );
};

export default Cita;
