import React from "react";
import TodoApp from "./TodoApp";
import useTareas from "./useTareas.jsx";

function Home() {
  const { tareas, agregarTarea, eliminarTarea } = useTareas([
    "Tender la cama",
    "Lavarme las manos",
    "Comer",
    "Pasear al perro",
  ]);

  return (
    <main>
      <section>
        <TodoApp
          tareas={tareas}
          onAgregar={agregarTarea}
          eliminarTarea={eliminarTarea}
        />
      </section>
    </main>
  );
}

export default Home;
