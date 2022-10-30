//BANCO POPULAR //Definición de clases

import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

console.log(cliente);
console.log(cliente2);

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");

//let saldo = cuentaDeLeonardo.verSaldo();

//console.log(cliente);
//saldo = cuentaDeLeonardo.depositoEnCuenta(150);

const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");


//cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);
//console.log(cuentaDeMaria.cliente);

//cuentaDeMaria.cliente = 0;
//console.log(cuentaDeMaria.cliente);

/*
const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (cuentaMaria) ${saldoMaria}`);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (cuentaLeonardo) ${saldoLeonardo}`);
*/