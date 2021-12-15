import { useContext } from "react";
import tareaContext from "../context/tareaContext";

const Tarea = ({ tarea }) => {
  
  //obtener proyectos del state
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea } = tareasContext;

  const onSubmmitEliminarTarea = () => {
    eliminarTarea(tarea);
  };

  return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <div className="flex-grow-1">
        <h6>{tarea.nombre}</h6>
      </div>

      <div className="container d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => console.log(tarea.nombre)}
        >
          Editar
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onSubmmitEliminarTarea()}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
