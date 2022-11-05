//BANCO POPULAR //Definición de clases
class Cliente {
    nombreCliente;
    cedulaCliente;
    rutCliente;
}

class CuentaCorriente {
    numero;
    #saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = "";
        this.agencia = "";
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
    }

    retirarDeCuenta(valor) {
        //this.saldo = this.saldo - valor;
        if (valor <= this.#saldo) // if para no generar retiro cuando hay menos saldo
            this.#saldo -= valor;
    }
}

cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.#saldo = 10;

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-100);
console.log(cuentaDeLeonardo);