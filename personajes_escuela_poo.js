

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`Registrando a ${this.nombre} con los siguientes datos: `) 
        console.log(this.edad);
        console.log(this.genero);
        console.log(this.curso);
        console.log(this.grupo);       
    }
};

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    };

    asignar() {
        console.log(`Asignando al profesor ${this.nombre} con los siguientes datos: `);
        console.log(this.edad);
        console.log(this.genero);
        console.log(this.asignatura);
        console.log(this.nivel);
    }; 
};

const estudiante1 = new Estudiante("Carlos", 12, "Masculino", "Matemáticas", "B");
estudiante1.registrar();

const profesor1 = new Profesor("Feliciana", 39, "Femenino", "Artes", "Superior");
profesor1.asignar();