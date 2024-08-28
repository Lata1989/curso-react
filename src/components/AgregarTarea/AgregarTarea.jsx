import { useState } from "react";
import PropTypes from 'prop-types';


export const AgregarTarea = ({ agregarTarea }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        // console.log(event);
        console.log("Esta escribiendo la tarea...");
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        // console.log(inputValue);
        // const envio = {
        //     nombre: inputValue,
        //     visto: false
        // }
        // agregarTarea(tareas => [...tareas, envio]);
        agregarTarea(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form action="" onSubmit={(event) => onSubmit(event)}>
                <input type="text" value={inputValue} onChange={(event) => onInputChange(event)} placeholder="Ingrese su tarea..." />
            </form>
        </>
    );
}

AgregarTarea.propTypes = {
    agregarTarea: PropTypes.func.isRequired, // Define que 'agregarTarea' es una función y es requerida
};