import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {

    leerDatos = (e) => {
        let busqueda = e.target.value;

        this.props.busqueda(busqueda);
    }

    render() {
        return (
            <form className="buscador" onChange={this.leerDatos}>
                <input type="text" placeholder="Busca tu productos aquí"/>
            </form>
        );
    }
}

export default Buscador;