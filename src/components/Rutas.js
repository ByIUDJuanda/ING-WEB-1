import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Busqueda from "../pages/Busqueda";
import Error404 from "../pages/Error404";
import Nuevo from "../pages/Nuevo";

function Rutas() {
 return (
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/buscar" element={<Busqueda/>}/>
                <Route exact path="/nuevo" element={<Nuevo/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    </>
 );
}
export default Rutas;