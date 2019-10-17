import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import SingleProduct from './SingleProduct/SingleProduct';
import Error from './Error/Error';
import infoProductos from '../data/datos.json';

class Router extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentDidMount() {
        this.setState({
            productos: infoProductos
        });
    }

    buscarProducto = (busqueda) => {
        if (busqueda.length > 2 && !/\s+$/.test(busqueda)) {
            this.setState({
                terminoBusqueda: busqueda
            });
        } else {
            this.setState({
                terminoBusqueda: ''
            });
        }
    }

    render() {

        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;

        if (busqueda !== '') {
            resultado = productos.filter(producto => {
                return producto.nombre.toLowerCase().indexOf(busqueda) !== -1;
            })
        } else {
            resultado = productos;
        }

        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />

                    <Navegacion />

                    <Switch>
                        <Route exact path="/" render={() => (
                            <Productos
                                productos={resultado}
                                buscarProducto={this.buscarProducto}
                            />
                        )} />
                        <Route exact path="/nosotros" component={Nosotros} />

                        <Route exact path="/productos" render={() => (
                            <Productos
                                productos={resultado}
                                buscarProducto={this.buscarProducto}
                            />
                        )} />

                        <Route exact path="/producto/:productoId" render={(props) => {
                            let productoId = props.location.pathname.replace('/producto/', ''); 
                            return (
                                <SingleProduct 
                                    producto={this.state.productos[productoId]}
                                />
                            );
                        }} />

                        <Route exact path="/contacto" component={Contacto} />

                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;