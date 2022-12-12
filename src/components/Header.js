import React from 'react';
// import "../Styles/Header.css"

function Header() {
    return (
        <>
            <div id="main_title">
                <img src="../Images/IUD.png" alt="Logo de IU" id="logo"/>
                <h1>Restaurante IU</h1>
            </div>
            <nav>
                <ul className="main__nav">
                    <li>
                        <a href='/'>Home</a>                                                                        
                    </li>
                    <li>
                        <a href='#'>Restaurante</a>
                    </li>
                    <li>
                        <a href='/buscar'>Busqueda</a>
                    </li>
                    <li>
                        <a href='/nuevo'>Nuevo</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Header;