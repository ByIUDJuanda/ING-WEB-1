import React from 'react';
import data from "../helpers/data.json";
import Restaurante from "../components/Restaurante";

function Home() {
    return (
        <section className='container'>
            {data.listaRestaurantes.map(el => 
                <Restaurante el={el}/>
            )}
        </section>
    );
}
export default Home;