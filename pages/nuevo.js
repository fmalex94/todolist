import Head from "next/head";
import uuid from 'uuid'
import { useContext, useState } from "react";
import Container from "../components/Container";
import tareaContext from "../context/tareaContext";
import  Router  from "next/router";

const Nuevo = () => {

    const tareasContext = useContext(tareaContext);
    const { nuevaTarea } = tareasContext;

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  const agregarTarea = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") return;

    tarea.id = uuid.v4();

    nuevaTarea(tarea);

    Router.push('/');
  };

  const onChangeTarea = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Head>
        <title>Nueva Tarea</title>
      </Head>

      <div className="row justify-content-center p-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Agregar nueva tarea</h2>

              <form onSubmit={agregarTarea}>
                <div className="form-group">
                  <label>Nombre Tarea</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Tarea"
                    value={nombre}
                    name="nombre"
                    onChange={(e) => onChangeTarea(e)}
                  />
                </div>

                <button type="submit" className="btn btn-secondary w-100">
                  Agregar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Nuevo;
