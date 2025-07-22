import { useState } from "react";

 function useTareas(initialTareas = []) {
  const [tareas, setTareas] = useState(initialTareas);

  const agregarTarea = (nuevaTarea) => {
    const textoSinEspacios = nuevaTarea.trim();
    if (!textoSinEspacios) return;
    setTareas((tareasPrevias) => [...tareasPrevias, textoSinEspacios]);
};

  const eliminarTarea = (indiceAeliminar) => {
    setTareas((tareasPrevias) =>
      tareasPrevias.filter((tareaActual, indiceActual) => indiceActual !== indiceAeliminar)
    );
  };

  return { tareas, agregarTarea, eliminarTarea };
}

export default useTareas;