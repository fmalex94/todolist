import { ELIMINAR_TAREA, NUEVA_TAREA } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas : state.tareas.filter(tarea => tarea.id !== action.payload.id)
      }
    case NUEVA_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas]
      }

    default:
        return state;
  }
};
