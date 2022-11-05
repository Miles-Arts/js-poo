import { Empleado } from "./empleado.js";

export class Director extends Empleado {

    constructor(nombre, cedula) {

        super(nombre, cedula);
    }
}