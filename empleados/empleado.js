export class Empleado {

    #nombre;
    #cedula;

    constructor(nombre, cedula) {
        this.#nombre = nombre;
        this.#cedula = cedula;
    }
}