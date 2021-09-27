import {
    Full
} from "./investigados.js"

const data = (async function() {
    const animalElement = document.querySelector("#animal")
    const edadElement = document.querySelector("#edad")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")

    const RegistrarElement = document.querySelector("#Registrar")
    const tarjetas = [];

    const playerElement = document.getElementById("player")

    let Animales = [];

    try {
        const Request = await fetch("/animales.json");
        const ParsedRequest = await Request.json();

        Animales = ParsedRequest.animales;

    } catch (e) {
        console.error(e)
    }

    function vista() {
        const elementos = document.querySelector(".tarjetas");


        elementos.innerHTML = ""

        tarjetas.forEach(animal => {
            const carta = document.createElement("div")
            const fotito = document.createElement("div");
            const botonera = document.createElement("div");

            carta.classList.add("card", "text-white", "bg-primary")
            carta.style.width = "50%";
            fotito.innerHTML = `<img src="./assets/imgs/${animal.Img}" class="card-img-top"/>`;

            fotito.addEventListener("click", () => {
                $("#modal").modal("show");
                const modalBody = document.querySelector(".modal-body");
                modalBody.innerHTML = `
                <img src="./assets/imgs/${animal.Img}" style="width: 50%" class="img-fluid" />
                <p class="text-white text-center" style="font-size: 14px"> ${animal.Nombre}</p>
                <p class="text-white text-center" style="font-size: 14px">${animal.Edad}</p>
                <p class="text-white text-center" style="font-size: 14px">${animal.Comentarios}</p>
                `
            })


            botonera.addEventListener("click", () => {
                if (animal.Nombre === "Full") {
                    animal.Rugir(playerElement);
                } else if (animal.Nombre === "React") {
                }
            })

            carta.appendChild(fotito)
            carta.appendChild(botonera)

            elementos.appendChild(carta)
        })



    }

    animalElement.addEventListener("change", () => {
        const eleccion = animalElement.value;
        const hallado = Animales.find(animal => animal.name === eleccion)

        previewElement.setAttribute("src", `./assets/imgs/${hallado.imagen}`)
    });

    RegistrarElement.addEventListener("click", () => {
        const nombre = animalElement.value;
        const edad = edadElement.value;
        const comentarios = comentariosElement.value;
        const {
            imagen
        } = Animales.find(animal => animal.name === nombre)

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