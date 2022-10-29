//BANCO POPULAR //Definición de clases
export class CuentaCorriente {
    
    cliente;
    numero;
    agencia;
    #saldo;

    constructor() {
        this.cliente = null;
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
        //this.saldo = this.saldo - valor;
        if (valor <= this.#saldo) // if para no generar retiro cuando hay menos saldo
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}