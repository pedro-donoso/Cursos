// importacion Curso.js
import { Curso } from "./Curso.js"

// creo subclase para cada curso con argumentos
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

// exportacion
export { Curso, VueJs, React, Angular };
