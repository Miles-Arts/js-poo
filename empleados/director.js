import { Empleado } from "./empleado.js";

export class Director extends Empleado {

    constructor(nombre, cedula, salario) {

        super(nombre, cedula, salario);
    }

    verBonificacion() {

        const bono = 10;
        return super._verBonificacion(bono);

    }

}