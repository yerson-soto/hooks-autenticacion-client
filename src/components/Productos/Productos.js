import React, { Component } from 'react';
import Producto from '../Producto/Producto';
import './Productos.css';
import Buscador from '../Buscador/Buscador';
import axios from 'axios';

class Productos extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentDidMount() {
        this.consultarApi();
    }
    
    consultarApi = () => {
        // console.log(this.props.auth.isAuthenticated() );
        const { getAccessToken } = this.props.auth;

        const headers = {'Authorization': `Bearer ${ getAccessToken() }`};

        const url = 'http://localhost:5000/productos';

        return axios.get(url, {headers})
            .then(respuesta => console.log(respuesta.data));
    }

    login = () => {
        this.props.auth.login();
    }


    render() { 

        const { isAuthenticated } = this.props;
        
        return (  
           <div className="productos">
                <h2>Nuestros Productos</h2>

                <Buscador 
                    busqueda={this.props.buscarProducto}
                />

                {
                    (!isAuthenticated) && (
                        <p>Estas logueado</p>
                    )
                }

                <ul className="lista-productos">
                    {/* {Object.keys(this.props.productos).map(producto => (
                        <Producto
                            key={producto}
                            infoProducto={this.props.productos[producto]}
                        />
                    ))} */}
                </ul>

                {
                    (!isAuthenticated) && (
                        <div className="contenedor-boton">
                            <p>Para ver el contenido debes estar logueado</p>
                            <button className="boton" type="button" onClick={this.login }> Iniciar Sesion</button>
                        </div>
                    )
                }
           </div>
        );
    }
}
 
export default Productos;