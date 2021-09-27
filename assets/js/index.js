import {
    Full
} from "./investigados.js"

const data = (async function() {
    const cursoElement = document.querySelector("#curso")
    const edadElement = document.querySelector("#edad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")

    const RegistrarElement = document.querySelector("#Registrar")
    const tarjetas = [];

    const playerElement = document.getElementById("player")

    let Animales = [];

    try {
        const Request = await fetch("/cursos.json");
        const ParsedRequest = await Request.json();

        Animales = ParsedRequest.cursos;

    } catch (e) {
        console.error(e)
    }

    function vista() {
        const elementos = document.querySelector(".tarjetas");


        elementos.innerHTML = ""

        tarjetas.forEach(tarjeta__curso => {
            const carta = document.createElement("div")
            const fotito = document.createElement("div");
            const botonera = document.createElement("div");

            carta.classList.add("card", "text-white", "bg-primary")
            carta.style.width = "50%";
            fotito.innerHTML = `<img src="./assets/imgs/${tarjeta__curso.Img}" class="card-img-top"/>`;

            fotito.addEventListener("click", () => {
                $("#modal").modal("show");
                const modalBody = document.querySelector(".modal-body");
                modalBody.innerHTML = `
                <img src="./assets/imgs/${tarjeta__curso.Img}" style="width: 50%" class="img-fluid" />
                <p class="text-white text-center" style="font-size: 14px"> ${tarjeta__curso.Nombre}</p>
                <p class="text-white text-center" style="font-size: 14px">${tarjeta__curso.Edad}</p>
                <p class="text-white text-center" style="font-size: 14px">${tarjeta__curso.Comentarios}</p>
                `
            })


            botonera.addEventListener("click", () => {
                if (tarjeta__curso.Nombre === "Full") {
                } else if (tarjeta__curso.Nombre === "React") {
                }
            })

            carta.appendChild(fotito)
            carta.appendChild(botonera)

            elementos.appendChild(carta)
        })



    }

    cursoElement.addEventListener("change", () => {
        const eleccion = cursoElement.value;
        const hallado = Animales.find(curso__dato => curso__dato.name === eleccion)

        previewElement.setAttribute("src", `./assets/imgs/${hallado.imagen}`)
    });

    RegistrarElement.addEventListener("click", () => {
        const nombre = cursoElement.value;
        const edad = edadElement.value;
        const comentarios = comentariosElement.value;
        const {
            imagen
        } = Animales.find(curso__dato => curso__dato.name === nombre)

        switch (nombre) {
             case "Full": {
                 const full = new Full(nombre, edad, imagen, comentarios);
                 tarjetas.push(full);
             }
             break;
            
        }

        console.log({
            tarjetas
        })
        vista();
    })

})()