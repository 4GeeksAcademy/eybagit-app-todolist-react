import React from "react";

function ListaTareas(props) {
  return (
    <ul className="list-group rounded-0">
      {props.tareas.map((tarea, indice) => (
        <li key={indice} className="list-group-item d-flex justify-content-between align-items-center rounded-0">
          {tarea}
          <button className="btn-eliminar" onClick={() => props.eliminarTarea(indice)}>
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;