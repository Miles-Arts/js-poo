//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";

export class CuentaCorriente {

    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0; //Atributo estatiuco que puede aumentar

    set cliente(valor) {
        if ( valor instanceof Cliente)
                this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente , numero, agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {

        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        //cuentaDestino.ciudad = "Lima"; // SE PUDE AÑADIR UN ATRIBUTO PERO NO ES BUENA PRACTICA
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}