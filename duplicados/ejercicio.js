class Cuenta {

    titular;
    numero;
    saldo;


    constructor(titular, numero, saldo) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = 0;
    }
}

class CuentaCorriente extends Cuenta {
    constructor(titular, numero, saldo) {
        super(titular, numero, saldo);
    }
}




const cuentaPepe = new CuentaCorriente("Pedro", "2020", 1245);


console.log(cuentaPepe);