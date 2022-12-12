import React from 'react';
// import "../Styles/Restaurante.css";

function Restaurante(props) {
    return (
        <article className='post'>
            <h2>{props.el.nombre}</h2>
            <p>{props.el.slogan}</p>
            <img src={props.el.imagen} alt='Imagen del restaurante'/>
            <p>{props.el.descripcion}</p>
        </article>
    );
}
export default Restaurante;