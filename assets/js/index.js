import {
    VueJs,
    React
} from "./investigados.js"

    const cursoElement = document.querySelector("#curso")
    const sedeElement = document.querySelector("#sede")
    const comentariosElement = document.querySelector("#comentarios")
    const previewElement = document.querySelector("#preview")
    const RegistrarElement = document.querySelector("#Registrar")
    const tarjetas = [];
    let Cursos = [];

    try {
        const Request = await fetch("/cursos.json");
        const ParsedRequest = await Request.json();

        Cursos = ParsedRequest.cursos;

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
                <p class="text-white text-center" style="font-size: 14px"> ${tarjeta__curso.Curso}</p>
                <p class="text-white text-center" style="font-size: 14px">${tarjeta__curso.Sede}</p>
                <p class="text-white text-center" style="font-size: 14px">${tarjeta__curso.Comentarios}</p>
                `
            })


            botonera.addEventListener("click", () => {
                if (tarjeta__curso.Nombre === "VueJs") {
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
        const hallado = Cursos.find(curso__dato => curso__dato.name === eleccion)

        previewElement.setAttribute("src", `./assets/imgs/${hallado.imagen}`)
    });

    RegistrarElement.addEventListener("click", () => {
        const curso = cursoElement.value;
        const sede = sedeElement.value;
        const comentarios = comentariosElement.value;
        const {
            imagen
        } = Cursos.find(curso__dato => curso__dato.name === curso)

        switch (curso) {
             case "VueJs": {
                 const vuejs = new VueJs(curso, sede, imagen, comentarios);
                 tarjetas.push(vuejs);
             }
                break;
              case "React": {
                  const react = new React(curso, sede, imagen, comentarios);
                  tarjetas.push(react);
              }
              break;
            
        }

        console.log({
            tarjetas
        })
        vista();
    })
