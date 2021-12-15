import Head from "next/head";
import { useContext, useState } from "react";
import Container from "../components/Container";
import Tarea from "../components/Tarea";
import tareaContext from "../context/tareaContext";

export default function Home() {
  const tareasContext = useContext(tareaContext);
  const { tareas } = tareasContext;

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <div className="container p-4">
        <div className="row justify-content-center mb-4">
          <h2>Listado de tareas</h2>
        </div>

        <ul className="list-group">
          {tareas.length === 0
            ? "No hay tareas"
            : tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)}
        </ul>
      </div>
    </Container>
  );
}
