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

console.log(cuentaDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(160);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);

console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);

console.log(`El saldo actual es: ${saldo}`);

