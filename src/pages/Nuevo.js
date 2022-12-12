function Nuevo() {
    return(
        <div className="nuevo-rest">
            <section className="main-input">
                <form className="row_g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Nombre</label>
                        <input type="Nomrbre" className="form-control" id="inputEmail4" placeholder="  Ej: Edwin David Garcia Peñaloza"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" className="form-label">Descripción</label>
                        <input type="Descripción" className="form-control" id="inputPassword4" placeholder="  Ej: Es un establecimiento con una tematica..."/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" className="form-label">Dirección</label>
                        <input type="Dirección" className="form-control" id="inputAddress" placeholder="  Ej: Mz 3 C 10; B/Quintas"/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" className="form-label">Imagen URL</label>
                        <input type="ImagenURL" className="form-control" id="inputAddress2" placeholder="  Ej: https://www.google.com.co/url?sa=i&url=https%3A%2F%2Fwww.archdaily.co%2Fco%2F957130%2Frestaurante-arlette-baran-buro&psig=AOvVaw1h4uNB3Ua-4SgmgNXnIypu&ust=1668194476072000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJic8O2qpPsCFQAAAAAdAAAAABAD"/>
                    </div>
                    <div class="col-12">
                        <button type="Guardar" className="Botón">Guardar</button>
                    </div>
              </form>
            </section>
        </div>
    );
}
export default Nuevo;