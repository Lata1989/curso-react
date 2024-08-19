import { useState } from "react";

export const ComponenteContador = () => {
    const [valor, setValor] = useState(0);

    return (
        <>
            <h1>Contador en React + Vite:</h1>
            <p>{valor}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    );

    function incrementar() {
        setValor(valor + 1);
    }

    function decrementar() {
        setValor(valor - 1);
    }
}