import { listaRestaurantes } from "../helpers/data.json";

const buscar = (valor) => {
    // let rest = document.querySelector(".list-rest");
    let verificar = false;

    for (let i = 0; i < listaRestaurantes.length; i++) {
        if (valor.value === listaRestaurantes[i].titulo) {
            verificar = true
        }
    }

    if (!verificar) {
        valor.value = "No hay resultados"; 
    }
    else {
        window.location.href = "restaurante.html";
        let titulo = window.localStorage;
        let nombre = valor.value;
        titulo.setItem('titulo', nombre);
    }
}