import React, {useReducer} from 'react';

import tareaContext from './tareaContext'
import tareaReducer from './tareaReducer'

import { ELIMINAR_TAREA, NUEVA_TAREA } from "../types";

const TareaState = props => {

    const initialState ={
        tareas : [
        {
          id: 1,
          nombre: "Elegir tecnologías",
        },
        {
          id: 2,
          nombre: "Crear proyecto",
        },
        {
          id: 3,
          nombre: "Poner nombre a proyecto",
        },
      ]
    }
    

      //crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const eliminarTarea = tarea => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tarea
        })
    }

    const nuevaTarea = tarea => {
      dispatch({
        type: NUEVA_TAREA,
        payload: tarea
      })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                eliminarTarea,
                nuevaTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;