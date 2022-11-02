//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";

export class CuentaCorriente {

    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {

        CuentaCorriente.cantidadCuentas++;
    }
}