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

cuentaDeLeonardo = new CuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

//cuentaDeLeonardo.#saldo = 10;

//cuentaDeLeonardo.depositoEnCuenta(100); MODO LARGO
//saldo = cuentaDeLeonardo.verSaldo(); MODO LARGO

saldo = cuentaDeLeonardo.depositoEnCuenta(100); //Modo corto
console.log(`El saldo actual es: ${saldo}`);

//console.log(cuentaDeLeonardo);
saldo = cuentaDeLeonardo.retirarDeCuenta(100);
//saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);
//console.log(cuentaDeLeonardo);
saldo = cuentaDeLeonardo.depositoEnCuenta(10);
//saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);
//console.log(cuentaDeLeonardo);