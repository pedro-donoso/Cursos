// clase
export class Curso {
    #curso;
    #sede;
    #modalidad;
    #img;
    #participantes;
   

    // constructor
    constructor(curso, sede, modalidad, img, participantes){
        this.#curso=curso;
        this.#sede = sede;
        this.#modalidad = modalidad;
        this.#img=img;
        this.#participantes = participantes;
  
    }
  // constructor

    // gets
    get Curso(){
        return this.#curso;
    }
    get Sede(){
        return this.#sede;
    }

    get Modalidad() {
        return this.#modalidad;
    }
    
    get Img2(){
        return this.#img;
    }

    get Participantes(){
        return this.#participantes;
    }



    set Participantes(value){
        this.#participantes=value;
    }
     // gets
}
// clase