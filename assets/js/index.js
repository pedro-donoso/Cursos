// importo desde malla.js
import {
    VueJs,
    React, 
    Angular
} from "./malla.js"
// importo desde malla.js

// creo constantes
    const cursoElement = document.querySelector("#curso")
const sedeElement = document.querySelector("#sede")
        const modalidadElement = document.querySelector("#modalidad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")
    const RegistrarElement = document.querySelector("#Registrar")
   // creo constantes


let btnPop = document.getElementById('btnPop')







//    creo array vacío cards
const cards = [];
let Cursos = [];











//    creo array vacío cards



    try {
        const Request = await fetch("/cursos.json");
        const ParsedRequest = await Request.json();

        Cursos = ParsedRequest.cursos;

    } catch (e) {
        console.error(e)
    }







    // creo función vista
function vista() {
        // selecciono array vacío cards
        const elementos = document.querySelector(".cards");
    elementos.innerHTML = ""
       // recorro cards  creo esctructura
        cards.forEach(tarjeta__curso => {
            const tarjeta = document.createElement("div")
            const imagen = document.createElement("div");
            const botonera = document.createElement("div");
            tarjeta.classList.add("card", "text-white", "bg-primary")
            tarjeta.style.width = "50%";
            // envio tarjeta al panel
            imagen.innerHTML = `<img src="./assets/imgs/${tarjeta__curso.Img}" class="card-img-top"/>`;
            // evento click modal
            imagen.addEventListener("click", () => {
                $("#modal").modal("show");





                const modalBody = document.querySelector(".modal-body");
                modalBody.innerHTML = `
                <img src="./assets/imgs/${tarjeta__curso.Img}" style="width: 50%" class="img-fluid" />
                <p class="text-white text-center" style="font-size: 16px">Curso: ${tarjeta__curso.Curso}</p>
                <p class="text-white text-center" style="font-size: 16px">Sede: ${tarjeta__curso.Sede}</p>
                 <p class="text-white text-center" style="font-size: 16px">Modalidad: ${tarjeta__curso.Modalidad}</p>
                <p class="text-white text-center" style="font-size: 16px">Comentarios: ${tarjeta__curso.Comentarios}</p>
                `
            })




            botonera.addEventListener("click", () => {
                if (tarjeta__curso.Nombre === "VueJs") {
                } else if (tarjeta__curso.Nombre === "React") {
                } else if (tarjeta__curso.Nombre === "Angular") {
                }
            })
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(botonera)
            elementos.appendChild(tarjeta)
                // evento click modal
        })
}
    





    // creo función vista

    cursoElement.addEventListener("change", () => {
        const eleccion = cursoElement.value;
        const buscar = Cursos.find(curso__dato => curso__dato.name === eleccion)

        previewElement.setAttribute("src", `./assets/imgs/${buscar.imagen}`)
    });


   



    RegistrarElement.addEventListener("click", () => {
        const curso = cursoElement.value;
        const sede = sedeElement.value;
        const modalidad = modalidadElement.value;
        const comentarios = comentariosElement.value;
        const {
            imagen
        } = Cursos.find(curso__dato => curso__dato.name === curso)

        switch (curso) {
             case "VueJs": {
                 const vuejs = new VueJs(curso, sede, modalidad, imagen, comentarios);
                 cards.push(vuejs);
             }
                break;
              case "React": {
                  const react = new React(curso, sede, modalidad, imagen, comentarios);
                  cards.push(react);
              }
                break;
            case "Angular": {
                const angular = new Angular(curso, sede, modalidad, imagen, comentarios);
                cards.push(angular);
            }
            break;
            
        }



        console.log({
            cards
        })
        vista();
    })


btnPop.addEventListener('click', function () {
    cards.pop()
    modal.innerHTML = `[${vista(cards)}]`
})