import React from 'react';
import { Link } from 'react-router-dom';

const Producto = (props) => {
    const { id, nombre, precio, imagen } = props.infoProducto;
    return (
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p> {nombre} <span> {precio} </span></p>
            <Link to={`/producto/${id}`}>Más Información</Link>
        </li>
    );
}
 
export default Producto;