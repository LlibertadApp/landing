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
        Usamos cookies 🍪 para garantir que oferecemos a melhor experiência em nosso site.
    </span>`;
    const btnElimniar = document.createElement("span");
    btnElimniar.classList.add("modal-delete");
    btnElimniar.innerText = "Aceitar";
    btnElimniar.onclick = ()=>{
        limpiarHTML();
    }
    div.appendChild(btnElimniar);
    footer.appendChild(div);
}

function limpiarHTML(){
    const cookie = document.querySelector(".contain-cookie")
    cookie.remove();
}