import { Component } from 'react';

class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: 'Hola, mundo!',
    };
  }

  cambiarMensaje = () => {
    this.setState({ mensaje: '¡Hola desde un componente de clase!' });
  }

  render() {
    return (
      <div>
        <h1>{this.state.mensaje}</h1>
        <button onClick={this.cambiarMensaje}>Cambiar Mensaje</button>
      </div>
    );
  }
}

export default MiComponente;