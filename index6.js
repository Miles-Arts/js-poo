//BANCO POPULAR //Definición de clases

import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";

const cliente = new Cliente();
cliente.nombreCliente = "Leonardo";
cliente.cedulaCliente = "12345";
cliente.rutCliente = "123456";

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = "1";
cuentaDeLeonardo.agencia = "001";
cuentaDeLeonardo.cliente = cliente;

//console.log(cuentaDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo();
//console.log(`El saldo actual (cuentaDeLeonardo) ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual (cuentaLeonardo) ${saldo}`);

//---------NUEVA CUENTA---------------------
//console.log(" \n \n --Nuevo cliente-- \n");

const cliente2 = new Cliente();
cliente2.nombreCliente = "María";
cliente2.cedulaCliente = "98765";
cliente2.rutCliente = "987654";

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = "2";
cuentaDeMaria.agencia = "002";
//cuentaDeMaria.cliente = cliente2;


if (cuentaDeMaria.cliente) {
    console.log( cuentaDeMaria.cliente);
} else 
console.log( cuentaDeMaria);




/*

//console.log(cuentaDeMaria);
//-------EJemplo de valor-------
//let parametroValor = 100; ejemplo 
//console.log(" Parámetro valor " , parametroValor);
//-------EJemplo de valor-------


cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);
console.log("cuenta de maria " , cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (cuentaMaria) ${saldoMaria}`);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (cuentaLeonardo) ${saldoLeonardo}`);

*/