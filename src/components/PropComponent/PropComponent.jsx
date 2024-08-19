import PropTypes from 'prop-types';

export const PropComponent = ({ titulo = "Esto es un titulo", subtitulo = "Esto es un subtitulo", numero = 5 }) => {
    return (
        <>
            <h4>Esta sección es de props</h4>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <p>{numero + 3}</p>
        </>
    );
}

PropComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
};