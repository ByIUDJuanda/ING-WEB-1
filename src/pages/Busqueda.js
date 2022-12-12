function Busqueda() {
    return(
        <div className="busqueda">
            <div className="main-container">
                <section className="main-logo">
                    <img src="../Images/Lupa.png" alt=""/>
                </section>
                <section className="main-input">
                    <div className="main-input-container">
                        <input list="restaurantes" className="list-rest"/>
                        <datalist id="restaurantes">
                            <option value="Restaurante El Argentino"></option>
                            <option value="Restaurante Elegante"></option>
                            <option value="Restaurante Marino"></option>
                            <option value="Restaurante Mexicano"></option>
                        </datalist>
                    </div>
                </section>
                <section class="main-button">
                    <div>
                        <input type="submit" value="Buscar" id="boton" />
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Busqueda;