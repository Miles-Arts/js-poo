import { Empleado } from "./empleado.js";

export class Gerente extends Empleado {

    constructor(nombre, cedula) {

        super(nombre, cedula);
    }
}