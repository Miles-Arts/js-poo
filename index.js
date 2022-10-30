//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);

new CuentaCorriente(cliente2, "2", "002");
new CuentaCorriente(cliente2, "2", "002");
new CuentaCorriente(cliente2, "2", "002");
new CuentaCorriente(cliente2, "2", "002");

console.log(CuentaCorriente.cantidadCuentas);