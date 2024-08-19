import { useState } from "react";
import PropTypes from 'prop-types';
import './ComponenteContador.css';

export const ComponenteContador = ({valor}) => {
    const [contador, setContador] = useState(valor);

    return (
        <>
            <h1>Contador en React + Vite:</h1>
            <p>{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    );

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        setContador(contador - 1);
    }
}

ComponenteContador.propTypes = {
    valor: PropTypes.number
}