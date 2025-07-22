import React from "react";
import EntradaTarea from "./EntradaTarea";
import ListaTareas from "./ListaTareas";
import Footer from "./Footer";
import "../../styles/index.css";

function TodoApp({ tareas, onAgregar, eliminarTarea }) {
  return (
    <div className="todo-container">
      <h1 className="titulo">todos</h1>
      <div className="lista-container shadow-sm rounded-0">
        <EntradaTarea onAgregar={onAgregar} />
        <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
         <Footer cantidad={tareas.length} />
      </div>
    </div>
  );
}

export default TodoApp;