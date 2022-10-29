//BANCO POPULAR //Definición de clases

import {CuentaCorriente} from "./cuentaCorriente.js";
//import {cliente} from "./cliente.js";

const cuentaDeLeonardo = new CuentaCorriente();

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
