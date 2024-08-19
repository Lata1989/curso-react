import "./Variables.css";

const unaString = "Esto es una string";
const number = 123456;
const unArray = ["Curso React + Vite", "Youtube", 4, 1000];
const unBool = true;
const funcion = () => "String desde funcion, si le paso una operacion tambien anda."
const unObjeto = {
    nombre: "Curso JavaScript",
    duracion: 4
}
const fecha = new Date();

export const Variables = () => {

    return (
        <>
            <h3>Variables en JSX:</h3>
            <p>String: {unaString}</p>
            <p>Numero: {number}</p>
            <p>Array: {unArray}</p>
            <p>Boolean: {unBool}</p>
            <p>Funcion: {funcion()}</p>
            <p>Objeto: {JSON.stringify(unObjeto)}  funciona utilizando JSON.stringify(objeto).</p>
            <p>Fecha: {JSON.stringify(fecha)} funciona utilizando JSON.stringify(objeto).</p>
        </>
    );
}