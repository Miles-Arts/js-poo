//BANCO POPULAR
//Definición de clases

class Cliente {
    nombreCliente;
    cedulaCliente;
    rutCliente;
}

class CuentaCorriente {
    numero;
    saldo;
    agencia;

    constructor() {
        this.saldo = 0;
    }

    depositoEnCuenta(valor) {

        this.saldo += valor;
    }

    retirarDeCuenta(valor) {
        //this.saldo = this.saldo - valor;
        this.saldo -= valor;
    }

}

cuentaDeLeonardo = new CuentaCorriente();

cuentaDeLeonardo.depositoEnCuenta(800);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo);