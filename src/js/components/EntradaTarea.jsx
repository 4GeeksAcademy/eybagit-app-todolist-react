import React, { useState } from "react";

 function EntradaTarea(props) {
  const [textoIngresado, setTextoIngresado] = useState("");

  function manejarCambioTexto(evento) {
    setTextoIngresado(evento.target.value);
  }

  function manejarEnvioFormulario(evento) {
    evento.preventDefault();

    const textoRecortado = textoIngresado.trim();
    if (!textoRecortado) return;

    props.onAgregar(textoRecortado);
    setTextoIngresado("");
  }

  return (
    <form onSubmit={manejarEnvioFormulario}>
      <input
        type="text"
        className="entrada-tarea form-control rounded-0"
        placeholder="¿Qué hay que hacer?"
        value={textoIngresado}
        onChange={manejarCambioTexto}
        aria-label="Campo para nueva tarea"
      />
    </form>
  );
}

export default EntradaTarea;