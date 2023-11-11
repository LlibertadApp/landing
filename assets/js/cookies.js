//Ubicacion del cartel cookie
const footer = document.querySelector(".footer");


//Eventos
eventListeners();
function eventListeners(){
    //Muestro el cartel cuando carga el documento
    document.addEventListener('DOMContentLoaded', ()=>{
        createModal();
    })
}
function createModal(){
    var allCookies = document.cookie.split(';'); //Obtengo las cookies pero no estamos usando ninguna cookie entonces ni siquiera debería haber cartel.
    //Creo el html
    const div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("contain-cookie");
    div.innerHTML = `
    <span class="text-cookie text-black ">
        Usamos las siguientes cookies 🍪 para darte la mejor experiencia:
        ${allCookies?.map((cookie)=> cookie.trim())}
    </span>`;
    const btnElimniar = document.createElement("span");
    btnElimniar.classList.add("modal-delete");
    btnElimniar.innerText = "Aceptar";
    btnElimniar.onclick = ()=>{
        modalClean();
    }
    div.appendChild(btnElimniar);
    footer.appendChild(div);
}

function modalClean(){
    const cookie = document.querySelector(".contain-cookie")
    cookie.remove();
}