//obtener todos los párrafos que son arrastrables

const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
// console.log(parrafos)
// console.log(secciones)


//dragstart-dragend
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging");
        //Transferencia de datos
        event.dataTransfer.setData("id", parrafo.id);
        const elemento_fantasma = document.querySelector(".imagen-fantasma");
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", event => {
        // console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging");

    })
})

//dragover te marca cada "movimiento" de la seccion
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        //por defecto el comportamiento HTML te esta quitando la posibilidad de poder gestionar los drop en el momento que se hace un dragover y por eso se tiene que prevenir con event.preventDefault()
        event.preventDefault()
        // console.log("Drag Over");
        event.dataTransfer.dropEffect = "copy";//copy por defecto
    })
    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);

    })
})