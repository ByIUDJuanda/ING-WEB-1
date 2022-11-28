const listaRestaurantes = ["Restaurante El Argentino", "Restaurante Elegante", "Restaurante Marino", "Restaurante Mexicano"];

const buscar = () => {
    let rest = document.querySelector(".list-rest");
    let verificar = false;

    for (let i = 0; i < listaRestaurantes.length; i++) {
        if (rest.value === listaRestaurantes[i]) {
            verificar = true
        }
    }

    if (!verificar) {
        rest.value = "No hay resultados"; 
    }
    else {
        window.location.href = "restaurante.html";
        let titulo = window.localStorage;
        let nombre = rest.value;
        titulo.setItem('titulo', nombre);
    }
}