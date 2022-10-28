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
        this.numero = "";
        this.agencia = "";
    }

    depositoEnCuenta(valor) {
        if (valor > 0);
        this.saldo += valor;
    }

    retirarDeCuenta(valor) {
        //this.saldo = this.saldo - valor;
        if (valor <= this.saldo) // if para no generar retiro cuando hay menos saldo
            this.saldo -= valor;

    }

}

cuentaDeLeonardo = new CuentaCorriente();

cuentaDeLeonardo.depositoEnCuenta(800);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(800);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-10);
console.log(cuentaDeLeonardo);