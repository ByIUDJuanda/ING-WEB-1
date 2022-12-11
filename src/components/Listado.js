import React from 'react';
import data from "../helpers/data.json";
import Restaurante from "./Restaurante";

function Listado() {
    return (
        <div className='container'>
            {data.listaRestaurantes.map(el => 
                <Restaurante el={el}/>
            )}
        </div>
    );
}
export default Listado;