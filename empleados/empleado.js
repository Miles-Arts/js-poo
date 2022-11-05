export class Empleado {

    #nombre;
    #cedula;
    #salario

    constructor(nombre, cedula, salario) {

        this.#nombre = nombre;
        this.#cedula = cedula;
        this.#salario = salario;

    }

    verBonificacion() {
        return this.#salario;
    }
    _verBonificacion(bono) {

        return this.#salario + this.#salario * bono / 100;

    }
}