import PropTypes from 'prop-types';
import { useState } from 'react';
import './ListadoApp.css';
import { AgregarTarea } from '../AgregarTarea/AgregarTarea';


export const ListadoApp = () => {
    let listadoSecciones = [
        { id: 1, nombre: "Instalaciones necesarias", visto: true },
        { id: 2, nombre: "Uso de Vite", visto: true },
        { id: 3, nombre: "Componentes", visto: true },
        { id: 4, nombre: "Variables en JSX", visto: true },
        { id: 5, nombre: "Props", visto: true },
        { id: 6, nombre: "Eventos", visto: true },
        { id: 7, nombre: "useState", visto: true },
        { id: 8, nombre: "Redux", visto: false },
        { id: 9, nombre: "customHooks", visto: false }
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)

    // Funciones del listado
    // const addTask = () => {
    //     setArreglo([...arreglo, {nombre: 'nuevo', visto: false}]);
    // };

    const onAgregarTarea = (valor) => {
        let val = valor.trim();
        if (valor < 1) return;
        console.log(val);
        const envio = {
            id: arreglo.length+1,
            nombre: val,
            visto: false
        }
        setArreglo([...arreglo, envio]);

    };

    return (
        <>
            <h1>Listado de temas del curso:</h1>
            {/* <AgregarTarea agregarTarea={setArreglo}/>  */} {/* Este caso el padre delega al hijo la responsabilidad de agregar una tarea*/}
            <AgregarTarea agregarTarea={onAgregarTarea} /> {/* Este caso el hijo le envia al padre para que agregue la tarea*/}
            {/* <button onClick={() => addTask()}>Agregar tarea</button> */}
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>
        </>
    );
}

const Item = ({ nombre, visto }) => {
    return (
        <li>
            {visto ? '✅' : '❌'}
            {nombre}
        </li>
    );
}

Item.propTypes = {
    nombre: PropTypes.string,
    visto: PropTypes.bool,
    setArreglo: PropTypes.func
};