// importo desde malla.js
import {
    VueJs,
    React,
    Angular
} from "./malla.js"
// importo desde malla.js



// creo constantes
const Course = document.querySelector("#curso")
const Course__sede = document.querySelector("#sede")
const Course__modalidad = document.querySelector("#modalidad")
const Course__comentarios = document.querySelector("#comentarios")
const Course__preview = document.querySelector("#preview")
const Course__registrar = document.querySelector("#Registrar")
// creo constantes

// borrar, viene desde html
let Course__borrar = document.getElementById('Borrar')

// creo array vacío Course__cards
let Course__cards = [];
let Course__array = [];

//    requiero json
try {
    const Request = await fetch("/cursos.json");
    const ParsedRequest = await Request.json();

    // capturo opciones, viene desde cursos.json
    Course__array = ParsedRequest.opciones;

} catch (e) {
    console.error(e)
}
//    requiero json

// creo función Course__vista
function Course__vista() {
    // sCourse__elecciono cards, viene desde html
    const Course__elementos = document.querySelector(".cards");
    Course__elementos.innerHTML = ""
    // recorro Course__cards  creo esctructura
    Course__cards.forEach(Course__tarjeta => {
        const Course__contenido = document.createElement("div")
        const Course__imagen = document.createElement("div");
        const Course__boton = document.createElement("div");
        Course__contenido.classList.add("card", "text-white", "bg-primary")
        Course__contenido.style.width = "50%";
        // envio tarjeta al panel
        Course__imagen.innerHTML = `<img src="./assets/imgs/${Course__tarjeta.Img}" class="card-img-top"/>`;

        // evento click modal, viene desde html
        Course__imagen.addEventListener("click", () => {
            $("#modal").modal("show");

            console.log(Course__tarjeta);

            // sCourse__elecciono modal-body, viene desde html
            const modalBody = document.querySelector(".modal-body");
            console.log(modalBody);

            // inyecto estructura
            modalBody.innerHTML = `
                <img src="./assets/imgs/${Course__tarjeta.Img}" style="width: 50%" class="img-fluid" />
                <p class="text-white text-center" style="font-size: 16px">Curso: ${Course__tarjeta.Curso}</p>
                <p class="text-white text-center" style="font-size: 16px">Sede: ${Course__tarjeta.Sede}</p>
                 <p class="text-white text-center" style="font-size: 16px">Modalidad: ${Course__tarjeta.Modalidad}</p>
                <p class="text-white text-center" style="font-size: 16px">Reservó: ${Course__tarjeta.Comentarios}</p>
                `
        })

        Course__boton.addEventListener("click", () => {
            if (Course__tarjeta.Nombre === "VueJs") {
            } else if (Course__tarjeta.Nombre === "React") {
            } else if (Course__tarjeta.Nombre === "Angular") {
            }
        })
        Course__contenido.appendChild(Course__imagen)
        Course__contenido.appendChild(Course__boton)
        Course__elementos.appendChild(Course__contenido)
        // evento click modal
    })

}

// Course principal
Course.addEventListener("change", () => {
    const Course__eleccion = Course.value;

    // capturo names desde cursos.json
    const Course__buscar = Course__array.find(Course__dato => Course__dato.names === Course__eleccion)

    // capturo imagenes dessde cursos.json
    Course__preview.setAttribute("src", `./assets/imgs/${Course__buscar.imagenes}`)
});

// contenido cards
Course__registrar.addEventListener("click", () => {
    const curso = Course.value;
    const sede = Course__sede.value;
    const modalidad = Course__modalidad.value;
    const comentarios = Course__comentarios.value;
    const {imagenes} = Course__array.find(Course__dato => Course__dato.names === curso)

    switch (curso) {
        case "VueJs": {
            const vuejs = new VueJs(curso, sede, modalidad, imagenes, comentarios);
            Course__cards.push(vuejs);
        }
            break;
        case "React": {
            const react = new React(curso, sede, modalidad, imagenes, comentarios);
            Course__cards.push(react);
        }
            break;
        case "Angular": {
            const angular = new Angular(curso, sede, modalidad, imagenes, comentarios);
            Course__cards.push(angular);
        }
            break;

    }

    console.log({
        Course__cards
    })

    Course__borrar.addEventListener('click', function () {
    Course__cards = [];
    Course__vista();
})

    Course__vista();
})
// contenido cards