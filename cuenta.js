export class Cuenta {

    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {

        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor, comision) {
        /*if (this.tipo == "Corriente")*/
            valor = valor * (1 + comision / 100);

        /*else if (this.tipo == "Ahorro")
            valor = valor * 1.02;*/

        if (valor <= this.#saldo)
            this.#saldo -= valor;

        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {

        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

    prueba() {
        console.log("Método padre");
    }

}

