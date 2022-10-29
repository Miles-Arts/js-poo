//BANCO POPULAR //Definición de clases
export 

class CuentaCorriente {
    numero;
    #saldo;
    agencia;

    constructor() {
        this.numero = "";
        this.#saldo = 0;
        this.agencia = "";
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        //this.saldo = this.saldo - valor;
        if (valor <= this.#saldo) // if para no generar retiro cuando hay menos saldo
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}