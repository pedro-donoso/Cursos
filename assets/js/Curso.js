// clase
export class Curso {
    #curso;
    #sede;
    #img;
    #comentarios;

    // constructor
    constructor(curso, sede, img, comentarios){
        this.#curso=curso;
        this.#sede=sede;
        this.#img=img;
        this.#comentarios=comentarios;
    }
  // constructor

    // gets
    get Curso(){
        return this.#curso;
    }
    get Sede(){
        return this.#sede;
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