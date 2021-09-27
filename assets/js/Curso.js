// clase
export class Curso {
    #curso;
    #sede;
       #modalidad;
    #img;
    #comentarios;
   

    // constructor
    constructor(curso, sede, modalidad, img, comentarios){
        this.#curso=curso;
        this.#sede = sede;
               this.#modalidad = modalidad;
        this.#img=img;
        this.#comentarios = comentarios;
  
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
    
    get Img(){
        return this.#img;
    }

    


    get Comentarios(){
        return this.#comentarios;
    }



    set Comentarios(value){
        this.#comentarios=value;
    }
     // gets
}
// clase