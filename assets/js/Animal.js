export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    constructor(nombre, edad, img, comentarios){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#img=img;
        this.#comentarios=comentarios;
    }

    get Nombre(){
        return this.#nombre;
    }
    get Edad(){
        return this.#edad;
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
}