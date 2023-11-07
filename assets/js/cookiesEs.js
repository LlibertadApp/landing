//Ubicacion del cartel cookie
const footer = document.querySelector(".footer");


//Eventos
eventListeners();
function eventListeners(){
    //Muestro el cartel cuando carga el documento
    document.addEventListener('DOMContentLoaded', ()=>{
        crearHTML();
    })
}
function crearHTML(){
    //Creo el html
    const div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("contain-cookie");
    div.innerHTML = `
    <span class="text-cookie">
        Utilizamos cookies 🍪 para asegurarnos de brindarle la mejor experiencia en nuestro sitio web.
    </span>`;
    const btnEliminar = document.createElement("span");
    btnEliminar.classList.add("modal-delete");
    btnEliminar.innerText = "Aceptar";
    div.appendChild(btnEliminar);
    btnEliminar.onclick = ()=>{
        limpiarHTML();
    }
    footer.appendChild(div);
}

function limpiarHTML(){
    const cookie = document.querySelector(".contain-cookie")
    cookie.remove();
}