//BANCO POPULAR //Definición de clases
export class CuentaCorriente {

    #cliente;
    numero;
    agencia;
    #saldo;

    set cliente(valor) {
        this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor() {
        this.#cliente = null;
        this.numero = "";
        this.agencia = "";
        this.#saldo = 0;
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