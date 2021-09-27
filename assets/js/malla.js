// importacion Curso.js
import { Curso } from "./Curso.js"
// importacion Curso.js

// creo clases
class VueJs extends Curso {
    constructor(...args) {
        super(...args)
    }

};
class React extends Curso {
    constructor(...args) {
        super(...args)
    }

};
class Angular extends Curso {
    constructor(...args) {
        super(...args)
    }

};

// creo clases

// exportacion
export { Curso, VueJs, React, Angular };
// exportacion