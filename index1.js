/*const nombreCliente = "Anita";
const cedulacliente = "123456";
const numeroCuenta = "09876";
const saldoCuenta = "1000";*/
//console.log(nombreCliente);

//BANCO POPULAR 

class Cliente 
{
    nombreCliente;
    cedulaCliente;
    rutCliente;
}

class CuentaCorriente 
{
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor) 
    {
        //cuentaCorriente2.saldo = cuentaCorriente2.saldo+valor; MODO NORMAL
        //this.saldo = this.saldo+valor; MODO EXTENSO
        this.saldo += valor; //MODO ABREVIADO
    }
}

//new cliente();

const cliente1 = new Cliente();
cliente1.nombreCliente = "Veronica";
cliente1.cedulaCliente = "123456";
cliente1.rutCliente = "123456";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "09876";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia = "1001"

const cliente2 = new Cliente();
cliente2.nombreCliente = "Catalina";
cliente2.cedulaCliente = "223344";
cliente2.rutCliente = "223344";

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero = "556677";
cuentaCorriente2.saldo = 8000;
cuentaCorriente2.agencia = "1002";

/*console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);*/

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);