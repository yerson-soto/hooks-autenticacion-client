import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {

    if(!props.producto) return null;
    const { nombre, imagen, precio, descripcion } = props.producto; 

    return (  
        
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre} />
            </div>

            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">{precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>

    );
    
}
 
export default SingleProduct;