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

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual (cuentaLeonardo) ${saldo}`);

const cliente2 = new Cliente();
    cliente2.nombreCliente = "María";
    cliente2.cedulaCliente = "98765";
    cliente2.rutCliente = "987654";

const cuentaDeMaria = new CuentaCorriente();
    cuentaDeMaria.numero = "2";
    cuentaDeMaria.agencia = "002";
    cuentaDeMaria.cliente = cliente2;

//cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);
console.log(cuentaDeMaria.cliente);


/*
const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (cuentaMaria) ${saldoMaria}`);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (cuentaLeonardo) ${saldoLeonardo}`);
*/