import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {

    render() { 
        return (  
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="Nosotros" />
                </div>

                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dui at felis tristique fringilla. Donec non eros lacinia, porttitor tellus quis, pulvinar mi. Curabitur est dui, malesuada sit amet ornare quis, placerat id ipsum. Aliquam condimentum imperdiet est ut porttitor. Curabitur elementum mi ipsum, a ultricies enim molestie sed. Quisque quis odio lorem. Sed mollis semper tellus eu porta. In lorem dui, malesuada at pretium a, egestas dignissim dui. Aliquam tempor justo vitae volutpat lacinia.</p>
                </div>
            </div>
        );
    }
}
 
export default Nosotros;