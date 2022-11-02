//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";
import { Cuenta } from "./cuenta.js";

export class CuentaCorriente extends Cuenta {

    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {

        super(cliente, numero, agencia, 0);
        CuentaCorriente.cantidadCuentas++;

    }

    prueba() {
        
        //super.prueba();
        console.log();

    }
}