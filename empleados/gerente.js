//BANCO POPULAR //
import { Empleado } from "./empleado.js";

export class Gerente extends Empleado {

    constructor(nombre, cedula, salario) {

        super(nombre, cedula, salario);
    }

    verBonificacion() {

        const bono = 5;
        return super._verBonificacion(bono);

    }

}