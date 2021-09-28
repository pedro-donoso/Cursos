// importo desde malla.js
import {
    VueJs,
    React,
    Angular
} from "./malla.js"

// creo constantes Course Principal y metodologia BEM
const Course = document.querySelector("#curso")
const Course__sede = document.querySelector("#sede")
const Course__modalidad = document.querySelector("#modalidad")
const Course__participantes = document.querySelector("#participantes")
const Course__preview = document.querySelector("#preview")
const Course__registrar = document.querySelector("#Registrar")

// borrar, viene desde html
let Course__borrar = document.getElementById('Borrar')

// creo array vacío Course__cards
let Course__cards = [];
let Course__array = [];

// requiero json, capturo opciones, viene desde cursos.json
try {
    const Course__request = await fetch("/cursos.json");
    const Course__parsed = await Course__request.json();
    Course__array = Course__parsed.opciones;
} catch (e) {
    console.error(e)
}

// creo función Course__vista selecciono cards, viene desde html
function Course__vista() {
    const Course__elementos = document.querySelector(".cards");
    Course__elementos.innerHTML = ""
    // recorro Course__cards  creo esctructura en tabla
    Course__cards.forEach(Course__tarjeta => {
        const Course__contenido = document.createElement("div")
        const Course__imagen = document.createElement("div");
        const Course__boton = document.createElement("div");
        Course__contenido.classList.add("card", "text-white")
        Course__contenido.style.width = "50%";
        // inyecto imagen en tabla, viene desde Curso.js
        Course__imagen.innerHTML = `<img src="./assets/imgs/${Course__tarjeta.Img2}" class="card-img-top"/>`;
        // evento click modal, viene desde html
        Course__imagen.addEventListener("click", () => {
            $("#modal").modal("show");
            // selecciono modal-body, viene desde html
            const modalBody = document.querySelector(".modal-body");
              // inyecto estructura en modal, Img2 viene desde Curso.js
            modalBody.innerHTML = `
                <img src="./assets/imgs/${Course__tarjeta.Img2}" style="width: 50%"/>
                <p class="text-white text-center" style="font-size: 14px">Curso: ${Course__tarjeta.Curso}</p>
                <p class="text-white text-center" style="font-size: 14px">Sede: ${Course__tarjeta.Sede}</p>
                 <p class="text-white text-center" style="font-size: 14px">Modalidad: ${Course__tarjeta.Modalidad}</p>
                <p class="text-white text-center" style="font-size: 14px">Reservó: ${Course__tarjeta.Participantes}</p>
                `
        })
// coincidencia
        Course__boton.addEventListener("click", () => {
            if (Course__tarjeta.nombre === "VueJs") {
            } else if (Course__tarjeta.nombre === "React") {
            } else if (Course__tarjeta.nombre === "Angular") {
            }
        })
        Course__contenido.appendChild(Course__imagen)
        Course__contenido.appendChild(Course__boton)
        Course__elementos.appendChild(Course__contenido)
    })
}

// Course principal, capturo names e imagenes desde cursos.json
Course.addEventListener("change", () => {
    const Course__eleccion = Course.value;
    const Course__buscado = Course__array.find(Course__dato => Course__dato.names === Course__eleccion)
    Course__preview.setAttribute("src", `./assets/imgs/${Course__buscado.imagenes}`)
});

// Se rellena con valores selccionados, viene de Curso.js
Course__registrar.addEventListener("click", () => {
    const curso = Course.value;
    const sede = Course__sede.value;
    const modalidad = Course__modalidad.value;
    const participantes = Course__participantes.value;
    const {imagenes} = Course__array.find(Course__dato => Course__dato.names === curso)

    switch (curso) {
        case "VueJs": {
            const vuejs = new VueJs(curso, sede, modalidad, imagenes, participantes);
            Course__cards.push(vuejs);
        }
            break;
        case "React": {
            const react = new React(curso, sede, modalidad, imagenes, participantes);
            Course__cards.push(react);
        }
            break;
        case "Angular": {
            const angular = new Angular(curso, sede, modalidad, imagenes, participantes);
            Course__cards.push(angular);
        }
            break;
    }

    // Se muestra opciones seleccionadas por consola
    console.log({
        Course__cards
    })

    // Limpia tabla
    Course__borrar.addEventListener('click', function () {
    Course__cards = [];
    Course__vista();
    })
    Course__vista();
})
